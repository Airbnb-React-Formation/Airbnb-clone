import "./SearchBar.css"
import DestinationPanel from "./DestinationPanel";
import {useEffect, useRef, useState} from "react";
import GuestsPanel from "./GuestsPanel";
import {FieldPanel, SearchBarField} from "./SearchBarField";
import {useNavigate} from "react-router-dom"
import CalendarPanel from "./CalendarPanel";
import 'moment/locale/fr'
import useClickOutside from "../../hook/useClickOutside";
import SearchButtonExtended from "./SearchButtonExtended";
import {useAuth} from "../context/AuthContext";
import {saveSearchHistory} from "../../api/clientApi";
import useGuestField from "../../hook/useGuestField";


const SearchBar = () => {
    const [selectedField, setSelectedField] = useState('')
    const [search, setSearch] = useState('')
    const [destination, setDestination] = useState({})
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const navigate = useNavigate()
    const {authUser} = useAuth()
    const {guest,setGuest,resetGuest} = useGuestField()
    const {adults,children,infants,pets} = guest
    const searchBarRef = useRef()
    useClickOutside(searchBarRef, () => setSelectedField(''))

    const handleResetDate = () => {
        setStartDate(null)
        setEndDate(null)
        setSelectedField('startDate')
    }

    const handleResetDestination = () => {
        setDestination({})
        setSearch('')
    }

    const handleSelectField = (fieldName) => {
        setSelectedField(fieldName)
    }

    const handleSelectDestination = (destination) => {
        setDestination(destination)
        setSelectedField('startDate')
        setSearch(destination.name)
    }

    const handleSearch = () => {
        if(!Object.keys(destination).length){
            setSelectedField('destination')
        }
        if (Object.keys(destination).length && startDate && endDate) {
            const params =
                "destination=" + destination.name
                + "&adults=" + (adults > 0 ? adults : 1 )
                + (children ? "&children=" + children : "")
                + (infants ? "&infants=" + infants : "")
                + (pets ? "&pets=" + pets : "")
                + "&startdate=" + startDate.format("YYYY-MM-DD")
                + "&enddate=" + endDate.format("YYYY-MM-DD")
                + "&coordinates=" + destination.coordinates
            setSelectedField('')
            if(authUser){
                saveSearchHistory(`?${params}`)
            }
            navigate(`/search/?${params}`)
        }
    }

    const getGuestsText = () => {
        const isMany = (number) => number > 1 ? "s" : ""
        const guests = adults + children
        const text =
            guests && (guests + " Voyageur" + isMany(guests))
            + (infants ? (", " + infants + " Bébé" + isMany(infants)) : "")
            + (pets ? (", " + pets + (pets > 1 ? " Animaux" : " Animal") + " de compagnie") : "")
        return (text)
    }

    return (
        <div className={selectedField ? "search-bar search-bar-darker" : "search-bar"} ref={searchBarRef}>
            <div className="destination-container">
                <SearchBarField
                    title="Destination"
                    placeholder="Où allez-vous ?"
                    selectedField={selectedField}
                    fieldName="destination"
                    onSelect={handleSelectField}
                    inputValue={search}
                    onInputValue={setSearch}
                    onReset={handleResetDestination}
                >
                    <FieldPanel>
                        <DestinationPanel search={search} onSelect={handleSelectDestination}/>
                    </FieldPanel>
                </SearchBarField>
            </div>
            <div className="date-container">
                <SearchBarField
                    title="Arrivée"
                    placeholder="Quand ?"
                    selectedField={selectedField}
                    fieldName="startDate"
                    onSelect={handleSelectField}
                    disabledInput={true}
                    inputValue={startDate?.format("DD MMM")}
                    onReset={handleResetDate}
                    // onInputValue={setSearch}
                >
                    <FieldPanel>
                        <CalendarPanel
                            startDate={startDate}
                            setStartDate={setStartDate}
                            endDate={endDate}
                            setEndDate={setEndDate}
                            focusedInput={selectedField}
                            setFocusedInput={setSelectedField}
                        />
                    </FieldPanel>
                </SearchBarField>
            </div>
            <div className="date-container">
                <SearchBarField
                    title="Départ"
                    placeholder="Quand ?"
                    selectedField={selectedField}
                    fieldName="endDate"
                    onSelect={handleSelectField}
                    disabledInput={true}
                    inputValue={endDate?.format("DD MMM")}
                    onReset={handleResetDate}
                >
                    <FieldPanel>
                        <CalendarPanel
                            startDate={startDate}
                            setStartDate={setStartDate}
                            endDate={endDate}
                            setEndDate={setEndDate}
                            focusedInput={selectedField}
                            setFocusedInput={setSelectedField}
                        />
                    </FieldPanel>
                </SearchBarField>
            </div>
            <div className="guests-container">
                <SearchBarField
                    title="Voyageurs"
                    placeholder="Qui ?"
                    selectedField={selectedField}
                    fieldName="guest"
                    onSelect={handleSelectField}
                    disabledInput={true}
                    inputValue={getGuestsText()}
                    onReset={resetGuest}
                >
                    <SearchButtonExtended selectedField={selectedField} handleSearch={handleSearch}/>
                    <FieldPanel align="right">
                        <GuestsPanel
                            guest={guest}
                            setGuest={setGuest}
                        />
                    </FieldPanel>
                </SearchBarField>
            </div>
        </div>
    )
}

export default SearchBar