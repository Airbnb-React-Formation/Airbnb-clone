import SearchButton from "./SearchButton";

const SearchButtonExtended = ({selectedField,handleSearch}) => {
    return (
        <div className="btn-search-container">
            <SearchButton isExtended={selectedField} onCLick={handleSearch}/>
        </div>
    );
}

export default SearchButtonExtended;