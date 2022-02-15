import "./DestinationPanel.css"
import {useEffect, useState} from "react";

const DestinationPanel = ({search}) => {
    const [result, setResult] = useState([])
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
    return (
        result.length > 0 &&
            <div className="suggestions-list">
                {result.map(({properties: {name, type, city, country, county}}) => (
                    <div className="suggestion">
                        <div className="localisation-icon-container">
                            <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{
                                height: "22px",
                                width: "22px",
                                display: "block",
                                fill: "black"
                            }}>
                                <path d="m12 13c-1.6562848 0-3-1.3434662-3-2.9994439 0-1.65708993 1.3437152-3.0005561 3-3.0005561 1.6573971 0 3 1.34346617 3 3.0005561 0 1.6559777-1.3426029 2.9994439-3 2.9994439m-.0010745-10c-3.86277368 0-6.99503645 3.09628261-6.99503645 6.91572385-.15345985 4.02308935 4.59013139 9.08416075 6.35071535 10.81932575.3584233.3532672.9312701.3532672 1.2896934 0 1.7595329-1.735165 6.5031241-6.7962364 6.3507153-10.81932575 0-3.81944124-3.1322627-6.91572385-6.9960876-6.91572385"></path>
                            </svg>
                        </div>
                        <div>
                            {name}
                            {(type === 'street' && city) && (", " + city)}
                            {(type === 'locality' && county) && (", " + county)}
                            {((type === 'city' || type === 'state' || type === 'county') && country) && (", " + country)}
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default DestinationPanel