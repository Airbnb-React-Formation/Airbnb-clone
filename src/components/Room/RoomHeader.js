import {HeartIcon, Icon, RatingStar, ShareIcon} from "../Icon/Icon";
import "./RoomHeader.css"

const RoomHeader = ({title,location}) => {
    return (
        <div className="RoomHeader">
            <div className="RoomHeader__title bold">
                {title?.toUpperCase()}
            </div>
            <div className="RoomHeader__subtitle-container">
                <div className="RoomHeader__subtitle-left">
                    <div className="result-list-item__rating">
                        <span className="result-list-item__rating-icon"><RatingStar/></span>
                        <span>4,5</span>
                        <span className="result-list-item__comments"> (8 commentaires)</span>
                    </div>
                    <div className="RoomHeader__separator">
                        <span>·</span>
                    </div>
                    <div className="RoomHeader__location">
                        {location}
                    </div>
                </div>
                <div className="RoomHeader__subtitle-right">
                    <button className="RoomHeader__button">
                    <Icon className="RoomHeader__icon">
                        <ShareIcon/>
                    </Icon>
                        <span>Partager</span>
                    </button>
                    <button className="RoomHeader__button">
                        <Icon className="RoomHeader__icon">
                            <HeartIcon/>
                        </Icon>
                        <span>Enregistrer</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RoomHeader;