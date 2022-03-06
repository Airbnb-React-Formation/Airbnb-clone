import ResultListItem from "./ResultListItem";
import moment from "moment";
import "./ResultList.css"

const ResultsList = ({tripDates, resultsList}) => {


    const tripDuration = moment(tripDates.endDate).diff(moment(tripDates.startDate), 'day')
    return (
        <div className="result-list">
            {resultsList.map((accommodation, i) => (
                <div key={i}>
                    <ResultListItem item={accommodation} tripDuration={tripDuration}/>
                    {
                        resultsList.length - 1 !== i
                        &&
                        <div className="result-list__divider"/>
                    }
                </div>
            ))}
        </div>
    )
}

export default ResultsList