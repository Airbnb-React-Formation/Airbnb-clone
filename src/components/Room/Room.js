import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {getAccommodation} from "../../api/accommodationApi";
import {useStyle} from "../context/StyleContext";
import searchParamsToObject from "../../helper/searchParamsToObject";
import './Room.css'
import RoomHeader from "./RoomHeader";
import {hydrateAccommodation} from "../../data/hydrate";
import RoomGallery from "./RoomGallery";
import RoomTitle from "./RoomTitle";
import RoomFeatures from "./RoomFeatures";
import RoomAbout from "./RoomAbout";

const Room = () => {
    const [room, setRoom] = useState({})
    const {id} = useParams()
    const {search} = useLocation()
    const query = searchParamsToObject(search)
    const headerConfig = {
        isStartExpanded: false,
        searchCollapsedType: "collapsed",
        isFixed: false
    }
    const {setConfig} = useStyle()
    useEffect(() => {
        setConfig({headerConfig})
        getAccommodation(id).then(data => setRoom(hydrateAccommodation(data,query.destination,query.coordinates)))
    }, [])
    return (
        Object.keys(room).length > 0 &&
        <div className="RoomPage">
            <RoomHeader title={room.title} location={room.place}/>
            <RoomGallery pictures={room.pictures}/>
            <div className="RoomPage__details">
                <div>
                    <RoomTitle room={room}/>
                    <RoomFeatures/>
                    <RoomAbout summary={room.summary}/>
                    {/*Todo*/}
                    {/*<RoomSleep/>*/}
                    {/*<RoomAmenities/>*/}
                    {/*<RoomCalendar/>*/}
                </div>
                <div>
                    {/*Todo*/}
                    {/*<RoomReservationBox/>*/}
                </div>
            </div>
            {/*ToDo*/}
            {/*<RoomDetails/>*/}
            {/*<RoomComments/>*/}
            {/*<RoomMapLocation/>*/}
            {/*<RoomHost/>*/}
            {/*<RoomToKnow/>*/}
        </div>
    )
}

export default Room;