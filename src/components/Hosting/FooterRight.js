import "./FooterRight.scss"
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import { grey } from '@mui/material/colors';

const defaultfunction = () => console.log("toto")


function FooterRight({nextStep= defaultfunction, textNext='Suivant',  textPrevious="Retour", previousStep=defaultfunction}){
    return(
        <div className="FooterRight">
            <Button onClick={(e)=> previousStep()} color="neutral" variant="text"><i>{textPrevious}</i></Button>
            <button className="FooterRight__Button" onClick={(e) => nextStep()}>
                {textNext}
            </button>
        </div>
    )
}
export default FooterRight;