import {Link} from "react-router-dom";
import "./Button.scss"

function Button({link, text}) {
    return (
        <div className="Button_link">
            <Link to={link}>
                {text}
            </Link>
        </div>)
}
export default Button;