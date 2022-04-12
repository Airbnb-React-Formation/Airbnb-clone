import "./RoomAbout.css"
import {ChevronRightIcon, Icon} from "../Icon/Icon";

const RoomAbout = ({summary}) => {
    return (
        <div className="RoomAbout RoomPage__block">
            <div className="RoomAbout__text">
                <span>{summary}</span>
            </div>
            <div className="RoomAbout__show-more">
                <button className="RoomAbout__button bold">
                    <span>En savoir plus</span>
                    <Icon className="RoomAbout__icon"><ChevronRightIcon/></Icon>
                </button>
            </div>
        </div>
    );
}

export default RoomAbout;