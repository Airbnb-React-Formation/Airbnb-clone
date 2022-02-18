import "./SearchBar.css"
import DestinationPanel from "./DestinationPanel";
import {useEffect, useRef, useState} from "react";
import GuestsPanel from "./GuestsPanel";
import {FieldPanel, SearchBarField} from "./SearchBarField";
import SearchButton from "./SearchButton";

const SearchBar = () => {
    const [search, setSearch] = useState('')
    const [destination,setDestination] = useState('')
    const [selectedField, setSelectedField] = useState('')

    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)
    const [pets, setPets] = useState(0)


    const setMinAdult = () => {
        if (!adults && (children || infants || pets))
            setAdults(1)
    }

    useEffect(() => {
        setMinAdult()
    }, [children, infants, pets])

    const searchBarRef = useRef()

    useSearchBarClickOut(searchBarRef)

    function useSearchBarClickOut(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setSelectedField(null);
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }


    const handleSelectField = (fieldName) => {
        setSelectedField(fieldName)
    }

    const handleSelectDestination = (destination) => {
        setDestination(destination)
        setSelectedField('start-date')
        setSearch(destination)
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
                    fieldName="start-date"
                    onSelect={handleSelectField}
                    disabledInput={true}
                    // inputValue={search}
                    // onInputValue={setSearch}
                >
                    <FieldPanel>

                    </FieldPanel>
                </SearchBarField>
            </div>
            <div className="date-container">
                <SearchBarField
                    title="Départ"
                    placeholder="Quand ?"
                    selectedField={selectedField}
                    fieldName="end-date"
                    onSelect={handleSelectField}
                    disabledInput={true}
                    // inputValue={search}
                    // onInputValue={setSearch}
                >
                    <FieldPanel>
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
                    // inputValue={search}
                    // onInputValue={setSearch}
                >
                    <SearchButton isExtended={selectedField}/>
                    <FieldPanel align="right">
                        <GuestsPanel
                            guestValues={{adults, children, infants, pets}}
                            guestHandlers={{setAdults, setChildren, setInfants, setPets}}
                        />
                    </FieldPanel>
                </SearchBarField>
            </div>
        </div>
    )
}

export default SearchBar