import "./ResultListItem.css"
import {isMany} from "../../helper/helper";
import {RatingStar} from "../Icon/Icon";
import ResultListCarousel from "./ResultListCarousel";
import {NavLink} from "react-router-dom";

const ResultListItem = ({item, tripDuration,onHover}) => {

    return (
        <div className="result-list-item" onMouseOver={()=>onHover(item.id)} onMouseLeave={()=>onHover('')}>
            <NavLink className="result-list-item__link" to={"/search/"+item.id}/>
            <div className="result-list-item__carousel"><ResultListCarousel pictureList={item.pictures}/></div>
            <div className="result-list-item__details">
                <div className="result-list-item__header">
                    <div className="result-list-item__subtitle">
                        <span>{item.housingType + " : " + item.placeType}</span>
                        <span> · </span>
                        <span>Particulier</span>
                        <span> · </span>
                        <span>{item.place}</span>
                    </div>
                    <div className="result-list-item__title">{item.title}</div>
                </div>
                <div className="result-list-item__details-separator"/>
                <div className="result-list-item__room">
                    <span>{item.maxGuest + " voyageur" + isMany(item.maxGuest)}</span>
                    <span> · </span>
                    <span>{item.bedrooms + " chambre" + isMany(item.bedrooms)}</span>
                    <span> · </span>
                    <span>{item.beds + " lit" + isMany(item.beds)}</span>
                    <span> · </span>
                    <span>{item.bathrooms + " salle" + isMany(item.bathrooms) + " de bain"}</span>
                </div>
                <div className="result-list-item__amenities">
                    <span>Parking gratuit · Wifi · Cuisine</span>
                </div>
                <div className="result-list-item__footer">
                    <div className="result-list-item__rating">
                        <span className="result-list-item__rating-icon"><RatingStar/></span>
                        <span>4,5</span>
                        <span className="result-list-item__comments"> (8 commentaires)</span>
                    </div>
                    <div className="result-list-item__price">
                        <div className="result-list-item__price-night">
                            <span className="bold">{item.pricePerNight}€</span>
                            <span> / nuit</span>
                        </div>
                        <div className="result-list-item__price-total">{tripDuration * item.pricePerNight}€ au total
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultListItem