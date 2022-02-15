import "./SearchBar.css"
import DestinationPanel from "./DestinationPanel";
import {useEffect, useRef, useState} from "react";
import GuestsPanel from "./GuestsPanel";
import {FieldPanel, SearchBarField} from "./SearchBarField";
import SearchButton from "./SearchButton";

const SearchBar = () => {
    const [search, setSearch] = useState('')
    const [selectedField, setSelectedField] = useState('')
    const searchBarRef = useRef()
    const destinationInputRef = useRef()
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

    const handleResetField = () => {
        setSearch("")
        destinationInputRef.current.focus()
    }
    const handleSelect = (fieldName) => {
        setSelectedField(fieldName)
    }

    return (
            <div className={selectedField ? "search-bar search-bar-darker" : "search-bar"} ref={searchBarRef}>
                <div className="destination-container">
                    <SearchBarField
                        title="Destination"
                        placeholder="Où allez-vous ?"
                        selectedField={selectedField}
                        fieldName="destination"
                        onSelect={handleSelect}
                        inputValue={search}
                        onInputValue={setSearch}
                    >
                        <FieldPanel>
                            <DestinationPanel search={search}/>
                        </FieldPanel>
                    </SearchBarField>
                </div>
                <div className="date-container">
                    <SearchBarField
                        title="Arrivée"
                        placeholder="Quand ?"
                        selectedField={selectedField}
                        fieldName="start-date"
                        onSelect={handleSelect}
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
                        onSelect={handleSelect}
                        disabledInput={true}
                        // inputValue={search}
                        // onInputValue={setSearch}
                    >
                        <FieldPanel>
                            <GuestsPanel/>
                        </FieldPanel>
                    </SearchBarField>
                </div>
                <div className="guests-container">
                    <SearchBarField
                        title="Voyageurs"
                        placeholder="Qui ?"
                        selectedField={selectedField}
                        fieldName="guest"
                        onSelect={handleSelect}
                        disabledInput={true}
                        // inputValue={search}
                        // onInputValue={setSearch}
                    >
                        <SearchButton isExtended={selectedField}/>
                        <FieldPanel align="right">
                            <GuestsPanel/>
                        </FieldPanel>
                    </SearchBarField>
                </div>
            </div>
    )
}

export default SearchBar