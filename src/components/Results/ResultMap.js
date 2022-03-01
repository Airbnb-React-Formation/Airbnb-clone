import "leaflet/dist/leaflet.css"
import "./ResultMap.css"
import L from 'leaflet';


import {Icon} from "leaflet/dist/leaflet-src.esm";
import {MapContainer, TileLayer, Marker, Popup,} from 'react-leaflet'

import icon from "leaflet/dist/images/marker-icon.png"
import "leaflet/dist/images/marker-icon-2x.png"
import "leaflet/dist/images/marker-shadow.png"
const text = L.divIcon({html: "<button>test</button>"});
const myIcon = new Icon({
    iconUrl: icon,
    html:<div>test</div>
})

const ResultMap = () => {

    return (

        <div className="result-map" style={{height: "100%", width: "100%"}}>
            <MapContainer center={[51.505, -0.09]} zoom={16}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]} icon={text}>
                    <div>test</div>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default ResultMap