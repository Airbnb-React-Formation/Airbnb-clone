import "./GuestsPanel.css"
import {StepperRow, StepperTitle, StepperSubTitle, StepperLink} from "./StepperRow";

const GuestsPanel = ({guest, setGuest, helperText = false, closeButton = false, onClose = null}) => {

    const {adults, children, infants, pets, minAdults, maxGuest} = guest
    return (
        <div className="GuestsPanel">
            <div>
                <StepperRow maxValue={maxGuest - children} value={adults}
                            handleChange={value => setGuest('adults', value)} minValue={minAdults}>
                    <StepperTitle>Adultes</StepperTitle>
                    <StepperSubTitle>13 ans et plus</StepperSubTitle>
                </StepperRow>
                <StepperRow maxValue={maxGuest - adults} value={children}
                            handleChange={value => setGuest('children', value)}>
                    <StepperTitle>Enfants</StepperTitle>
                    <StepperSubTitle>De 2 à 12 ans</StepperSubTitle>
                </StepperRow>
                <StepperRow value={infants} handleChange={value => setGuest('infants', value)} maxValue={5}>
                    <StepperTitle>Bébés</StepperTitle>
                    <StepperSubTitle>- de 2 ans</StepperSubTitle>
                </StepperRow>
                <StepperRow value={pets} handleChange={value => setGuest('pets', value)} maxValue={5}>
                    <StepperTitle>Animaux domestiques</StepperTitle>
                    <StepperLink><a href="#">Un animal d'assistance vous accompagne ?</a></StepperLink>
                </StepperRow>
            </div>
            {
                helperText &&
                <div className="GuestsPanel__helper">
                    La capacité d'accueil de ce logement est limitée à {guest.maxGuest} voyageurs, sans compter
                    les bébés. Si plus de deux animaux de compagnie vous accompagnent, veuillez en informer votre hôte.
                </div>
            }
            {
                closeButton &&
                <div className="GuestsPanel_button-wrapper">
                    <button className="GuestsPanel__close-button bold" onClick={onClose}>Fermer</button>
                </div>
            }
        </div>
    )
}

export default GuestsPanel