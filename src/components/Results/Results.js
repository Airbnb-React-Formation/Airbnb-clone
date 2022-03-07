import ResultsList from "./ResultsList";
import ResultMap from "./ResultMap";
import "./Results.css"
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import hydrateAccommodations from "../../data/hydrate";
import accommodations from "../../data/accommodations.json";
import useSearchParamsToObject from "../../hook/useSearchParamsToObject";

const Results = () => {
    const navigate = useNavigate()
    const query = useSearchParamsToObject()
    const {coordinates,destination,startdate,enddate} = query
    const [mapBounds, setMapBounds] = useState({})
    const [results,setResults] = useState(hydrateAccommodations(accommodations,destination,mapBounds))

    useEffect(()=>{
        if(Object.keys(mapBounds).length !== 0)
        setResults(hydrateAccommodations(accommodations,destination,mapBounds))
    },[mapBounds])
    return (
        <div>
            <button onClick={() => navigate(-1)}>Retour</button>
            <div className="result-page">
                <ResultsList tripDates={{startDate:startdate,endDate:enddate}} resultsList={results}/>
                <ResultMap coordinates={coordinates} handleBounds={setMapBounds} results={results}/>
            </div>
        </div>
    )
}

export default Results