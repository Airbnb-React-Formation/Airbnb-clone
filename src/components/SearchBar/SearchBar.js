import "./SearchBar.css"
import DestinationPanel from "./DestinationPanel";
import {useState} from "react";

const SearchBar = () => {
    const [showDestination, setShowDestination] = useState(false)
    const [search, setSearch] = useState('')
    return (
        <div className="search-bar">
            <div className="destination-container">
                <label htmlFor="input-localisation" className="button destination">
                    <div>
                        <div>Destination</div>
                        <input
                            id="input-localisation"
                            type="text"
                            placeholder="Où allez-vous ?"
                            value={search}
                            autoComplete="off"
                            onChange={(e) => setSearch(e.target.value)}
                            onFocus={() => {
                                document.querySelector('.btn-search-text').style.display = "block"
                                setShowDestination(true)
                            }}
                            onBlur={() => {
                                document.querySelector('.btn-search-text').style.display = "none"
                                setShowDestination(false)
                            }}/>
                    </div>
                </label>
                {showDestination && <DestinationPanel search={search}/>}
            </div>
            <div className="button dates">
                <div>
                    <div>Arrivée</div>
                    <div className="placeholder">Quand ?</div>
                </div>
            </div>
            <div className="button dates">
                <div>
                    <div>Départ</div>
                    <div className="placeholder">Quand ?</div>
                </div>
            </div>
            <div className="guests-container">
                <div className="button guests">
                    <div>
                        <div>Voyageurs</div>
                        <div className="placeholder">Qui ?</div>
                    </div>
                </div>
                <div className="btn-search">
                    <div style={{overflow: "hidden", boxSizing: "border-box", padding: "16px", display: "flex"}}>
                        <div>
                            <svg viewBox="0 0 32 32"
                                 xmlns="http://www.w3.org/2000/svg"
                                 aria-hidden="true"
                                 role="presentation"
                                 focusable="false"
                                 style={{
                                     display: "block",
                                     fill: "none",
                                     height: "16px",
                                     width: "16px",
                                     stroke: "white",
                                     strokeWidth: "4",
                                     overflow: "visible"
                                 }}>
                                <g fill="none">
                                    <path
                                        d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                                </g>
                            </svg>
                        </div>
                        <div className="btn-search-text">Rechercher</div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SearchBar