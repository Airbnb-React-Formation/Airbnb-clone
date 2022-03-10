import ResultsList from "./ResultsList";
import ResultMap from "./ResultMap";
import "./Results.css"
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import hydrateAccommodations from "../../data/hydrate";
import accommodations from "../../data/accommodations.json";
import useSearchParamsToObject from "../../hook/useSearchParamsToObject";

const Results = () => {
    const [results, setResults] = useState([])
    const [resultHovered,setResultHovered] = useState('')
    const navigate = useNavigate()
    const query = useSearchParamsToObject()
    const {coordinates, destination, startdate, enddate} = query
    const [mapBounds, setMapBounds] = useState({})
    useEffect(() => {
        fetch("/api/accommodations")
            .then(res => res.json())
            .then(json => setResults(hydrateAccommodations(json,destination,mapBounds)))
    },[])
    useEffect(() => {
        if (Object.keys(mapBounds).length !== 0)
            setResults(hydrateAccommodations(accommodations, destination, mapBounds))
    }, [mapBounds])

    const handleHover = (id) => setResultHovered(id)
    return (


            results.length > 0 ?
                (
                <div className="result-page">
                    <button onClick={() => navigate(-1)}>Retour</button>
                    <div className="result-container">
                        <ResultsList tripDates={{startDate: startdate, endDate: enddate}} resultsList={results} onHover={handleHover}/>
                        <ResultMap coordinates={coordinates} handleBounds={setMapBounds} results={results} resultHovered={resultHovered}/>
                    </div>
                </div>
                )
                :
                null

    )
}

export default Results