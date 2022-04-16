import "./DestinationPanel.css"
import {useEffect, useState} from "react";
import {getSearchHistory} from "../../api/clientApi";
import {useNavigate} from "react-router-dom";
import * as moment from "moment";
import {useAuth} from "../context/AuthContext";
import {isMany} from "../../helper/helper";
import {HistoryIcon, Icon, LocationIcon} from "../Icon/Icon";

const DestinationPanel = ({search, onSelect}) => {
    const [result, setResult] = useState([])
    const [searchHistory, setSearchHistory] = useState([])
    const navigate = useNavigate()
    const {authUser} = useAuth()
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        if (authUser) {
            const fetchSearchHistory = async () => {
                getSearchHistory().then((searches) => {
                    setSearchHistory(searches)
                    setIsLoaded(true)
                })
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

            if ((!filteredPlaces.length && search) || (!search && !searchHistory.length)) setIsLoaded(false)
            else setIsLoaded(true)
            // else if(((!searchHistory.length || !isLoaded) && filteredPlaces.length)||(!search && searchHistory.length)) setIsLoaded(true)
        })
    }, [search])
    return (
        isLoaded ?
            <div className="suggestions-list">
                {
                    result.length ?
                        result.map(({geometry, properties: {name, type, city, country, county}}, i) => (
                            <div key={i} className="suggestion" onClick={() => {
                                onSelect({name: name, coordinates: geometry.coordinates})
                            }}>
                                <div className="localisation-icon-container">
                                    <Icon className="destination-panel__icon"><LocationIcon/></Icon>
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
                            searchHistory?.length ?
                                <>
                                    <div className="suggestion__title bold">Recherches récentes</div>
                                    {searchHistory.map(({
                                                            url,
                                                            destination,
                                                            startDate,
                                                            endDate,
                                                            adults,
                                                            children,
                                                            infants,
                                                            pets
                                                        }, i) => (
                                        <div key={i} className="suggestion" onClick={() => {
                                            navigate(`/search/${url}`)
                                        }}>
                                            <div className="localisation-icon-container">
                                                <Icon className="destination-panel__icon"><HistoryIcon/></Icon>
                                            </div>
                                            <div>
                                                <div>{destination}</div>
                                                <div
                                                    className="suggestion__subtext">{`${moment(startDate).format("DD MMM")} - ${moment(endDate).format("DD MMM")} • ${(adults + children) + " voyageur" + isMany(adults + children)} `}</div>
                                            </div>
                                        </div>
                                    ))}
                                </>
                                : null
                        )
                }
            </div>
            :
            null)
}

export default DestinationPanel