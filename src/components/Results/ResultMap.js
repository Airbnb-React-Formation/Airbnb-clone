import {useEffect, useRef, useState} from "react";
import {MapContainer, TileLayer, useMapEvent, Pane} from 'react-leaflet'
import PriceMapMarker from "./PriceMapMarker";
import "leaflet/dist/leaflet.css"
import "./ResultMap.css"
import "./PriceMapMarker.css"



const MapEvents = ({handleBounds}) => {
    useEffect(() => {
        handleBounds({southWest: map.getBounds().getSouthWest(), northEast: map.getBounds().getNorthEast()})
    }, [])

    const map = useMapEvent({
        moveend: () => {
            handleBounds({
                southWest: map.getBounds().getSouthWest(),
                northEast: map.getBounds().getNorthEast(),
            })
            map.closePopup()
        },
        zoomend: () => {
            handleBounds({
                southWest: map.getBounds().getSouthWest(),
                northEast: map.getBounds().getNorthEast()
            })
            map.closePopup()
        }
    })
    return null
}


const ResultMap = ({coordinates, handleBounds, results, resultHovered, isHidden}) => {
    const mapRef = useRef()
    coordinates = coordinates.split(',').reverse()
    const [selectedMarker, setSelectedMarker] = useState('')
    useEffect(()=>{
        const map = mapRef.current;
        setTimeout(() => {
            map?.invalidateSize();
        }, 250);
    },[isHidden])
    const handleSelect = (id) => {
        setSelectedMarker(id)
    }

    return (

        <div  className={"result-map" + (isHidden ? " result-page__hidden":"")}>
            <MapContainer  whenCreated={ mapInstance => { mapRef.current = mapInstance } } center={coordinates} zoom={16}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {
                    Object.keys(results[0].coordinates).length !== 0 &&
                    (
                        results.map((accommodation, i) => (
                            <PriceMapMarker
                                key={i}
                                accommodation={accommodation}
                                selectedMarker={selectedMarker}
                                onSelect={handleSelect}
                                resultHovered={resultHovered}
                            />
                        ))
                    )
                }
                <Pane name="custom-page" style={{zIndex: 700}}/>
                <MapEvents handleBounds={handleBounds} isHidden={isHidden}/>
            </MapContainer>
        </div>
    )
}

export default ResultMap