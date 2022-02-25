import {useLocation} from "react-router-dom";
import {useMemo, useState} from "react";
import accommodations from "../../data/accommodations.json"
import ResultListItem from "./ResultListItem";
import moment from "moment";
import hydrateAccommodations from "../../data/hydrate";
import "./ResultList.css"

const ResultsList = () => {
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

    const [results,setResults] = useState(hydrateAccommodations(accommodations,query.destination))

    const tripDuration = moment(query.enddate).diff(moment(query.startdate),'day')
    return (
        <div className="result-list">
            {results.map((accommodation,i)=>(
                <div key={i}>
                    <ResultListItem item={accommodation} tripDuration={tripDuration}/>
                    {results.length -1 !== i
                        &&
                        <div className="result-list__divider"/>
                            }
                </div>
            ))}
        </div>
    )
}

export default ResultsList