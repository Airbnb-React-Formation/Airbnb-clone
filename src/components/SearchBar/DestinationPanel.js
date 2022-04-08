import "./DestinationPanel.css"
import {useEffect, useState} from "react";
import {getSearchHistory} from "../../api/clientApi";
import {useNavigate} from "react-router-dom";
import * as moment from "moment";
import {useAuth} from "../context/AuthContext";

const DestinationPanel = ({search, onSelect}) => {
    const [result, setResult] = useState([])
    const [searchHistory, setSearchHistory] = useState([])
    const navigate = useNavigate()
    const {authUser} = useAuth()
    useEffect(() => {
        if(authUser){
            const fetchSearchHistory = async () => {
                const searches = await getSearchHistory()
                setSearchHistory(searches)
            }
            fetchSearchHistory().catch(err => console.log(err))
        }
    }, [])
    useEffect(() => {
        const url = "https://photon.komoot.io/api/?q=" + search + "&lang=fr"
        fetch(url).then(res => res.json()).then(data => {
            const places = data.features
            const filteredPlaces = places.filter((place) => {
                const authorizedType = ["street", "city", "county", "state", "country", "locality"]
                return authorizedType.indexOf(place.properties.type) !== -1
            })
            setResult(filteredPlaces.slice(0, 5))
        })
    }, [search])
    return (<div className="suggestions-list">
        {
            result.length ?
                result.map(({geometry, properties: {name, type, city, country, county}}, i) => (
                    <div key={i} className="suggestion" onClick={() => {
                        onSelect({name: name, coordinates: geometry.coordinates})
                    }}>
                        <div className="localisation-icon-container">
                            <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"
                                 style={{
                                     height: "22px", width: "22px", display: "block", fill: "black"
                                 }}>
                                <path
                                    d="m12 13c-1.6562848 0-3-1.3434662-3-2.9994439 0-1.65708993 1.3437152-3.0005561 3-3.0005561 1.6573971 0 3 1.34346617 3 3.0005561 0 1.6559777-1.3426029 2.9994439-3 2.9994439m-.0010745-10c-3.86277368 0-6.99503645 3.09628261-6.99503645 6.91572385-.15345985 4.02308935 4.59013139 9.08416075 6.35071535 10.81932575.3584233.3532672.9312701.3532672 1.2896934 0 1.7595329-1.735165 6.5031241-6.7962364 6.3507153-10.81932575 0-3.81944124-3.1322627-6.91572385-6.9960876-6.91572385"/>
                            </svg>
                        </div>
                        <div>
                            {name}
                            {(type === 'street' && city) && (", " + city)}
                            {(type === 'locality' && county) && (", " + county)}
                            {((type === 'city' || type === 'state' || type === 'county') && country) && (", " + country)}
                        </div>
                    </div>))
                :
                (
                    searchHistory.length ?
                    <>
                        <div className="suggestion__title bold">Recherches récentes</div>
                        {searchHistory.map(({url, destination, startDate, endDate}, i) => (
                            <div key={i} className="suggestion" onClick={() => {
                                navigate(`/search/${url}`)
                            }}>
                                <div className="localisation-icon-container">
                                    <svg
                                        viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                        role="presentation" focusable="false"
                                        style={{height: "22px", width: "22px", display: "block", fill: "black"}}>
                                        <path
                                            d="m15.9999.3335c8.6524795 0 15.6667 7.01422051 15.6667 15.6667 0 8.6524795-7.0142205 15.6667-15.6667 15.6667-8.65247949 0-15.6667-7.0142205-15.6667-15.6667 0-8.65247949 7.01422051-15.6667 15.6667-15.6667zm0 2c-7.54790999 0-13.6667 6.11879001-13.6667 13.6667 0 7.54791 6.11879001 13.6667 13.6667 13.6667 7.54791 0 13.6667-6.11879 13.6667-13.6667 0-7.54790999-6.11879-13.6667-13.6667-13.6667zm1.0001 3v10.0895l8.7375978 5.0444733-.9999956 1.7320534-9.7376022-5.6219748v-11.2440519z"/>
                                    </svg>
                                </div>
                                <div>
                                    <div>{destination}</div>
                                    <div
                                        className="suggestion__subtext">{`${moment(startDate).format("DD MMM")} - ${moment(endDate).format("DD MMM")} • `}</div>
                                </div>
                            </div>
                        ))}
                    </>
                        :null
                )
        }
    </div>)
}

export default DestinationPanel