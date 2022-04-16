import "./RoomAmenities.css"
import RoomAmenity from "./RoomAmenity";
import {hydrateAmenities} from "../../data/hydrate";


const RoomAmenities = ({amenity}) => {
    amenity = [0,1,2,3,4,5,6,7,8,9]
    amenity = hydrateAmenities(amenity)
    return (
        <div className="RoomPage__block">
            <h2 className="RoomAmenities__title">Ce que propose ce logement</h2>
            <div className="RoomAmenities__amenities">
                {amenity.map((amenity)=>(
                    <RoomAmenity amenity={amenity}/>
                ))}

            </div>
        </div>
    );
}

export default RoomAmenities;