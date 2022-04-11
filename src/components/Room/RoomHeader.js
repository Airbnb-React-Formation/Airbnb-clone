import {HeartIcon, Icon, RatingStar, ShareIcon} from "../Icon/Icon";
import "./RoomHeader.css"

const RoomHeader = ({title,location}) => {
    return (
        <div className="room-page__header">
            <div className="room-page__header-title bold">
                {title?.toUpperCase()}
            </div>
            <div className="room-page__header-subtitle-container">
                <div className="room-page__header-subtitle-left">
                    <div className="result-list-item__rating">
                        <span className="result-list-item__rating-icon"><RatingStar/></span>
                        <span>4,5</span>
                        <span className="result-list-item__comments"> (8 commentaires)</span>
                    </div>
                    <div className="room-page__header-subtitle-separator">
                        <span>·</span>
                    </div>
                    <div className="room-page__header-subtitle-location">
                        {location}
                    </div>
                </div>
                <div className="room-page__header-subtitle-right">
                    <button className="room-page__header-subtitle-button">
                    <Icon className="room-page__header-subtitle-button-icon">
                        <ShareIcon/>
                    </Icon>
                        <span>Partager</span>
                    </button>
                    <button className="room-page__header-subtitle-button">
                        <Icon className="room-page__header-subtitle-button-icon">
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