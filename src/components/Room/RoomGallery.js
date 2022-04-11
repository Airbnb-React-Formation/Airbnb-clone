import "./RoomGallery.css"

const RoomGallery = ({pictures}) => {
    return (
        <div className="room-page__gallery">
            {pictures.map((picture, i) => (
                <div key={i} className={`room-page__gallery-picture-${i + 1}`}>
                    <img
                        src={picture}
                        alt={`Photo n°${i + 1}`}
                    />
                </div>
            ))}
        </div>
    );
}

export default RoomGallery;