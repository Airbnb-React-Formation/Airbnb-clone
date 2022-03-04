import "./PriceMapMarker.css"
import {Marker} from 'react-leaflet';
import L from "leaflet";
import * as ReactDOMServer from "react-dom/server";

const PriceIcon = ({accommodation}) => {
    return (
        <div className="price-map-marker">
            {accommodation.pricePerNight}€
        </div>
    )
}

const PriceMapMarker = ({accommodation}) => {
    const getPriceIcon = (accommodation) => (
        L.divIcon({
            html: ReactDOMServer.renderToString(<PriceIcon accommodation={accommodation}/>),
            className: "custom-marker",
        })
    )

    return (
            <Marker position={accommodation.coordinates} icon={getPriceIcon(accommodation)}/>
    )
}

export default PriceMapMarker