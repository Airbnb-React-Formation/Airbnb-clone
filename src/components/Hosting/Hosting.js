import "./Hosting.scss"
import {useContext} from "react";
import BecomeHostIntro from "./BecomeHostIntro";


function Hosting(){
    const step = useContext(0)

    return(
    <div>
        <BecomeHostIntro/>
    </div>
    )
}

export default Hosting;