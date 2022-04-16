import "./RoomAmenity.css"
import {Icon} from "../Icon/Icon";
import {createElement} from "react";
import {capitalizeFirstLetter} from "../../helper/helper";

const RoomAmenity = ({amenity}) => {
    const iconName = capitalizeFirstLetter(amenity.name) + "Icon"
    console.log(iconName)
    const {[iconName]: icon} = require('../Icon/AmenitiesIcons')
    const AmenityIcon = () => {
        if (icon) {
            return createElement(icon, {})
        }
        return null
    }
    return (
        <div className="RoomAmenity">
            <Icon className="RoomAmenity__icon"><AmenityIcon/></Icon>
            <div className="RoomAmenity__text">{amenity.displayName}</div>
        </div>
    );
}

export default RoomAmenity;