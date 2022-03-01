import ResultsList from "./ResultsList";
import ResultMap from "./ResultMap";
import "./Results.css"
import {useLocation, useNavigate} from "react-router-dom";
import {useMemo} from "react";

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
    return (
        <div>
            <button onClick={() => navigate(-1)}>Retour</button>
            <div className="result-page">
                <ResultsList destination={destination} tripDates={{startDate:startdate,endDate:enddate}}/>
                <ResultMap coordinates={coordinates}/>
            </div>
        </div>
    )
}

export default Results