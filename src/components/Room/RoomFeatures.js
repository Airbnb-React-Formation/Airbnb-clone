import "./RoomFeatures.css"
import {AutonomousDoorIcon, Icon, WifiIcon} from "../Icon/Icon";

const RoomFeatures = () => {
    return (
        <div className="RoomPage__block">
            <div className="RoomFeatures__feature">
                <Icon className="RoomFeatures__icon"><AutonomousDoorIcon/></Icon>
                <div className="RoomFeatures__container">
                    <div className="RoomFeatures__text bold">
                        Arrivée autonome
                    </div>
                    <div className="RoomFeatures__subtext">
                        Vous pouvez entrer dans les lieux avec un concierge.
                    </div>
                </div>
            </div>
            <div className="RoomFeatures__feature">
                <Icon className="RoomFeatures__icon"><WifiIcon/></Icon>
                <div className="RoomFeatures__container">
                    <div className="RoomFeatures__text bold">
                        Équipements pour la vie quotidienne
                    </div>
                    <div className="RoomFeatures__subtext">
                        L'hôte a équipé ce logement pour les séjours longue durée. Les équipements suivants sont inclus
                        : cuisine, wifi et lave-linge. Les animaux de compagnie sont également autorisés.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomFeatures;