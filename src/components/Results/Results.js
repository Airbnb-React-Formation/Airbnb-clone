import ResultsList from "./ResultsList";
import ResultMap from "./ResultMap";
import "./Results.css"
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useMemo, useState} from "react";
import hydrateAccommodations from "../../data/hydrate";
import accommodations from "../../data/accommodations.json";

const Results = () => {
    const navigate = useNavigate()
    const useQuery = () => {
        const { search } = useLocation();
        return useMemo(() => new URLSearchParams(search), [search]);
    }
    const queryToObject = (entries) => {
        const result = {}
        for (const [key,value] of entries){
            result[key] = value
        }
        return result
    }
    const query = queryToObject(useQuery().entries())
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