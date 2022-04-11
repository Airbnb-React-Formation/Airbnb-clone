import ResultsList from "./ResultsList";
import ResultMap from "./ResultMap";
import "./Results.css"
import {useEffect, useState} from "react";
import {hydrateAccommodations} from "../../data/hydrate";
import accommodations from "../../data/accommodations.json";
import searchParamsToObject from "../../helper/searchParamsToObject";
import {useStyle} from "../context/StyleContext";
import ShowMapOrListButton from "./ShowMapOrListButton";
import {useLocation} from "react-router-dom";

const Results = () => {
    const [results, setResults] = useState([])
    const [resultHovered, setResultHovered] = useState('')
    const [showOnlyMap, setShowOnlyMap] = useState(false)
    const {search} = useLocation()
    const query = searchParamsToObject(search)
    const {coordinates, destination, startdate, enddate} = query
    const [mapBounds, setMapBounds] = useState({})
    const {setConfig} = useStyle()
    const headerConfig = {
        isStartExpanded: false, searchCollapsedType: "collapsed",
    }
    useEffect(() => {
        setConfig({headerConfig})
        fetch("/api/accommodations")
            .then(res => res.json())
            .then(json => setResults(hydrateAccommodations(json, destination, mapBounds)))
    }, [])
    useEffect(() => {
        if (Object.keys(mapBounds).length !== 0) {
            setResults(hydrateAccommodations(accommodations, destination, mapBounds))
        }
    }, [mapBounds])

    const handleHover = (id) => setResultHovered(id)
    const handleShowButtonClick = () => {
        setShowOnlyMap(!showOnlyMap)
    }
    return (results.length > 0 ? (<div className="result-page">
                <div className="result-container">
                    <div className="result-page__show-button-container">
                        <ShowMapOrListButton onClick={handleShowButtonClick} showOnlyMap={showOnlyMap}/>
                    </div>
                    <ResultsList tripDates={{startDate: startdate, endDate: enddate}} resultsList={results}
                                 onHover={handleHover} isHidden={showOnlyMap}/>
                    <ResultMap coordinates={coordinates} handleBounds={setMapBounds} results={results}
                               resultHovered={resultHovered} isHidden={!showOnlyMap}/>
                </div>
            </div>) : null

    )
}

export default Results