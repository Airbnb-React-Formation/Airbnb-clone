import "./GuestsPanel.css"
import {StepperRow, StepperTitle, StepperSubTitle, StepperLink} from "./StepperRow";
import {useEffect, useState} from "react";

const GuestsPanel = ({maxGuest = 16, animalAllowed = true, guestValues,guestHandlers}) => {

    const {adults,children,infants,pets} = guestValues
    const {setAdults, setChildren, setInfants, setPets} = guestHandlers

    return (
        <div className="guests-panel">
            <StepperRow maxValue={maxGuest - children} value={adults} handleChange={setAdults}>
                <StepperTitle>Adultes</StepperTitle>
                <StepperSubTitle>13 ans et plus</StepperSubTitle>
            </StepperRow>
            <StepperRow maxValue={maxGuest - adults} value={children} handleChange={setChildren}>
                <StepperTitle>Enfants</StepperTitle>
                <StepperSubTitle>De 2 à 12 ans</StepperSubTitle>
            </StepperRow>
            <StepperRow value={infants} handleChange={setInfants} maxValue={5}>
                <StepperTitle>Bébés</StepperTitle>
                <StepperSubTitle>- de 2 ans</StepperSubTitle>
            </StepperRow>
            <StepperRow value={pets} handleChange={setPets} maxValue={5}>
                <StepperTitle>Animaux domestiques</StepperTitle>
                <StepperLink><a href="#">Un animal d'assistance vous accompagne ?</a></StepperLink>
            </StepperRow>
        </div>
    )
}

export default GuestsPanel