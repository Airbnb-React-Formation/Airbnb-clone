import {useEffect} from "react";
import {MapContainer, TileLayer, useMapEvent} from 'react-leaflet'
import PriceMapMarker from "./PriceMapMarker";
import "leaflet/dist/leaflet.css"
import "./ResultMap.css"
import "./PriceMapMarker.css"


const MapEvents = ({handleBounds}) => {
    useEffect(() => {
        handleBounds({southWest: map.getBounds().getSouthWest(), northEast: map.getBounds().getNorthEast()})
    }, [])

    const map = useMapEvent({
        moveend: () => handleBounds({
            southWest: map.getBounds().getSouthWest(),
            northEast: map.getBounds().getNorthEast()
        }),
        zoomend: () => handleBounds({
            southWest: map.getBounds().getSouthWest(),
            northEast: map.getBounds().getNorthEast()
        })
    })
    return null
}

const ResultMap = ({coordinates, handleBounds, results}) => {
    coordinates = coordinates.split(',').reverse()
    return (

        <div className="result-map">
            <MapContainer center={coordinates} zoom={16}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    Object.keys(results[0].coordinates).length !== 0 &&
                    (
                        results.map((accommodation, i) => (
                            <PriceMapMarker key={i} accommodation={accommodation}/>
                        ))
                    )
                }
                <MapEvents handleBounds={handleBounds}/>
            </MapContainer>
        </div>
    )
}

export default ResultMap