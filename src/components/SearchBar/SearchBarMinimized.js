import "./SearchBarMinimized.css"
import SearchButton from "./SearchButton";

const SearchBarMinimized = ({onCLick}) => {
    return (
        <button className="search-bar-minimized" onClick={onCLick}>
            <div className="search-bar-minimized__text">
                <span className="bold">
                    Commencer votre recherche
                </span>
            </div>
            <div className="search-button__wrapper">
                <SearchButton/>
            </div>
        </button>
    )
}

export default SearchBarMinimized