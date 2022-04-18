import "./RoomReservationBox.css"
import {Icon, RatingStar} from "../Icon/Icon";
import {Button} from "@mui/material";
import useGuestField from "../../hook/useGuestField";
import GuestsPanel from "../SearchBar/GuestsPanel";
import {useRef, useState} from "react";
import useClickOutside from "../../hook/useClickOutside";
import {FieldPanel} from "../SearchBar/FieldPanel";

const RoomReservationBoxField = ({label, placeHolder, value, disabled}) => {
    return (
        <div className="RoomReservationBoxField">
            <label
                className={"RoomReservationBoxField__label bold" + (disabled ? " RoomReservationBoxField__label--disabled" : "")}>
                    <span>
                        {label}
                    </span>
            </label>
            <div className="RoomReservationBoxField__value">
                {
                    disabled ?
                        <span
                            className={value ? "" : "RoomReservationBoxField__input--grey"}>{value ? value : placeHolder}</span>
                        :
                        <input className="RoomReservationBoxField__input" placeholder={placeHolder} value={value}
                               disabled={disabled}/>
                }

            </div>
        </div>
    )
}

const RoomReservationBox = ({price, query, maxGuest}) => {
    const [fieldSelected,setFieldSelected] = useState("")
    const fieldsRef = useRef()
    useClickOutside(fieldsRef,()=>setFieldSelected(""))
    const initGuestState = {
        ...((query.adults && !isNaN(+query.adults)) && {adults: +query.adults}),
        ...((query.children && !isNaN(+query.children)) && {children: +query.children}),
        ...((query.infants && !isNaN(+query.infants)) && {infants: +query.infants}),
        ...((query.pets && !isNaN(+query.pets)) && {pets: +query.pets}),
        maxGuest: maxGuest
    }
    const {guest, setGuest,displayGuestText} = useGuestField(initGuestState)
    return (<div className="RoomReservationBox">
        <div className="RoomReservationBox__header">
            {price ? <div>
                <span className="RoomReservationBox__night-price bold">{price}€</span>
                <span>&nbsp;/ nuit</span>
            </div> : <div className="RoomReservationBox__title">Ajoutez des dates pour voir le prix</div>}
            <div className="RoomReservationBox__comments">
                <div className="result-list-item__rating">
                    <Icon className="result-list-item__rating-icon"><RatingStar/></Icon>
                    <span>4,5</span>
                    <span className="result-list-item__comments"> (8 commentaires)</span>
                </div>
            </div>
        </div>
        <div className="RoomReservationBox__fields" ref={fieldsRef}>
            <div className="RoomReservationBox__dates">
                <button className="RoomReservationBox__field-button">
                    <div className="RoomReservationBox__dates-container">
                        <RoomReservationBoxField label="Arrivée" placeHolder="Ajouter une date" disabled={true}/>
                        <div className="RoomReservationBox__dates-separator"/>
                        <RoomReservationBoxField label="Départ" placeHolder="Ajouter une date" disabled={true}/>
                    </div>
                </button>
            </div>
            <div className="RoomReservationBox__guests">
                <button className="RoomReservationBox__field-button" onClick={()=>setFieldSelected('guests')}>
                    <RoomReservationBoxField value={displayGuestText} label="Voyageurs" placeHolder="1 voyageur" disabled={true}/>
                </button>
                    <FieldPanel className="RoomReservationBox__guests-panel" fieldName="guests" isSelected={fieldSelected} align="right">
                        <GuestsPanel guest={guest} setGuest={setGuest}/>
                    </FieldPanel>
            </div>
        </div>
        <div className="RoomReservationBox__button">
            <Button size="large" variant="contained-red" fullWidth={true}>
                Vérifier la disponibilité
            </Button>
        </div>
    </div>);
}

export default RoomReservationBox;