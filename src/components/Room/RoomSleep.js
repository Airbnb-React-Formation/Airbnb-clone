import "./RoomSleep.css"
import {BedDoubleIcon, Icon} from "../Icon/Icon";

const RoomSleep = () => {
    return (
        <div className="RoomPage__block">
            <h2 className="RoomSleep__title">Où vous dormirez</h2>
            <div className="RoomSleep__sleep-rooms">
                <div className="RoomSleep__sleep-room">
                    <Icon className="RoomSleep__icon"><BedDoubleIcon/></Icon>
                    <h3 className="RoomSleep__text">Chambre 1</h3>
                    <div className="RoomSleep__subtext">1 lit double</div>
                </div>
                <div className="RoomSleep__sleep-room">
                    <Icon className="RoomSleep__icon"><BedDoubleIcon/></Icon>
                    <h3 className="RoomSleep__text">Chambre 2</h3>
                    <div className="RoomSleep__subtext">1 lit double</div>
                </div>
                <div className="RoomSleep__sleep-room">
                    <Icon className="RoomSleep__icon"><BedDoubleIcon/></Icon>
                    <h3 className="RoomSleep__text">Chambre 3</h3>
                    <div className="RoomSleep__subtext">1 lit double</div>
                </div>
            </div>
        </div>
    );
}

export default RoomSleep;