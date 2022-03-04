import "./FooterRight.scss"
import {Link} from "react-router-dom";
const defaultfunction = () => console.log("toto")
function FooterRight({nextStep= defaultfunction, text}){
    return(
        <div className="FooterRight">
            <button className="FooterRight__Button" onClick={(e) => nextStep()}>
                {text}
            </button>
        </div>
    )
}
export default FooterRight;