import "./PriceMapMarker.css"
import {Marker, Popup} from 'react-leaflet';
import L from "leaflet";
import * as ReactDOMServer from "react-dom/server";
import ResultListCarousel from "./ResultListCarousel";
import {RatingStar} from "../Icon/Icon";

const PriceIcon = ({accommodation, selected,hovered}) => {
    return (
        <div className="price-map__wrapper">
            <div className="price-map">
                <div className={(selected || hovered)  ? "price-map__marker selected" : "price-map__marker"}>
                    <span className="bold">{accommodation.pricePerNight}€</span>
                </div>
            </div>
        </div>
    )
}

const PriceMapMarker = ({accommodation, onSelect, selectedMarker, onClick,resultHovered}) => {
    const getPriceIcon = (accommodation) => (
        L.divIcon({
            html: ReactDOMServer.renderToString(<PriceIcon accommodation={accommodation}
                                                           selected={selectedMarker === accommodation.id}
                                                           hovered={resultHovered === accommodation.id}
                                                           onClick={onClick}/>),
            className: "custom-marker",
        })
    )

    return (
        <Marker
            // pane="popupPane"
            eventHandlers={{
                click: () => {
                    onSelect(accommodation.id)
                }
            }}
            position={accommodation.coordinates}
            icon={getPriceIcon(accommodation)}
        >
            <Popup>
                <div
                    className="price-map__popup">
                    <ResultListCarousel pictureList={accommodation.pictures}/>
                    <div className="price-map__popup-text">
                        <div className="price-map__popup-comments">
                            <span className="result-list-item__rating-icon"><RatingStar/></span>
                            <span>4,5</span>
                            <span className="result-list-item__comments"> (8)</span>
                        </div>
                        <div className="price-map__popup-housing-type">
                            {accommodation.housingType + " : " + accommodation.placeType}
                        </div>
                        <div className="price-map__popup-title">{accommodation.title}</div>
                        <div className="price-map__popup-price">
                            <span className="bold">{accommodation.pricePerNight}€</span>
                            <span>&nbsp;/ nuit</span>
                        </div>
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}

export default PriceMapMarker