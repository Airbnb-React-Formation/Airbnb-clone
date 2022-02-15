import "./GuestsPanel.css"
import {StepperRow,StepperTitle,StepperSubTitle,StepperLink} from "./StepperRow";

const GuestsPanel = () => {
    return (
        <div className="guests-panel">
            <StepperRow>
                <StepperTitle>Adultes</StepperTitle>
                <StepperSubTitle>13 ans et plus</StepperSubTitle>
            </StepperRow>
            <StepperRow>
                <StepperTitle>Enfants</StepperTitle>
                <StepperSubTitle>De 2 à 12 ans</StepperSubTitle>
            </StepperRow>
            <StepperRow>
                <StepperTitle maxValue={5}>Bébés</StepperTitle>
                <StepperSubTitle>- de 2 ans</StepperSubTitle>
            </StepperRow>
            <StepperRow maxValue={5}>
                <StepperTitle>Animaux domestiques</StepperTitle>
                <StepperLink><a href="#">Un animal d'assistance vous accompagne ?</a> </StepperLink>
            </StepperRow>
        </div>
    )
}

export default GuestsPanel