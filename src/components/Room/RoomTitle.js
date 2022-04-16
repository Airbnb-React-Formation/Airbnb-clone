import "./RoomTitle.css"
import {isMany} from "../../helper/helper";

const RoomTitle = ({room}) => {
    return (
        <div className="RoomTitle RoomPage__block">
            <div className="RoomPage__title-container">
                <h2 className="RoomTitle__title">
                    {`${room.housingType} : ${room.placeType.toLowerCase()} · Hôte : ${'HostName'}`}
                </h2>
                <ol className="RoomTitle__subtitle">
                    <li className="RoomTitle__subtitle-item">{`${room.maxGuest} voyageur${isMany(room.maxGuest)}`}</li>
                    <li className="RoomTitle__subtitle-item">{`${room.bedrooms} chambre${isMany(room.bedrooms)}`}</li>
                    <li className="RoomTitle__subtitle-item">{`${room.beds} lit${isMany(room.beds)}`}</li>
                    <li className="RoomTitle__subtitle-item">{`${room.bathrooms} salle${isMany(room.bathrooms)} de bain`}</li>
                </ol>
            </div>
            <div className="RoomTitle__host-picture">

            </div>
        </div>
    );
}

export default RoomTitle;