import "./Hosting.scss"
import React, {useContext} from "react";
import BecomeHostIntro from "./BecomeHostIntro";
import FooterRight from "./FooterRight";

const StepContext = React.createContext()





function LeftForm({children}){
    return (
        <div className="LeftPart">
            {children}
        </div>
    )
}
function RightForm({children}){
    const log =() => console.log("Etape")
    return (
        <div className="RigthPart">
            <div>{children}</div>
            <FooterRight nextStep={log}/>
        </div>
    )
}
function Hosting(){
    const step = useContext(0)
    const changeStep = () => {console.log("step") }
    return(
        <StepContext.Provider value={0}>
            <div className="grid">
                <LeftForm>toto</LeftForm>
                <RightForm>toto</RightForm>
            </div>
        </StepContext.Provider>
    )
}

export default Hosting;