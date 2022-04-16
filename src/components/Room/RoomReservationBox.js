import "./RoomReservationBox.css"
import {Icon, RatingStar} from "../Icon/Icon";
import {Button} from "@mui/material";

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

const RoomReservationBox = ({price}) => {
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
        <div className="RoomReservationBox__fields">
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
                <button className="RoomReservationBox__field-button">
                    <RoomReservationBoxField label="Voyageurs" placeHolder="1 voyageur" disabled={true}/>
                </button>
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