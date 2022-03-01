import {useLocation} from "react-router-dom";
import {useMemo, useState} from "react";
import accommodations from "../../data/accommodations.json"
import ResultListItem from "./ResultListItem";
import moment from "moment";
import hydrateAccommodations from "../../data/hydrate";
import "./ResultList.css"

const ResultsList = ({destination,tripDates}) => {

    const [results,setResults] = useState(hydrateAccommodations(accommodations,destination))

    const tripDuration = moment(tripDates.endDate).diff(moment(tripDates.startDate),'day')
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