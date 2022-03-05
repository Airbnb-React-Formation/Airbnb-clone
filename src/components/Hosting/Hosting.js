import "./Hosting.scss"
import React, {useContext} from "react";
import BecomeHostIntro from "./BecomeHostIntro";
import FooterRight from "./FooterRight";
import AddressMaps from "./AddressMaps";
import {IconAirbnb} from "../Icon/Icon";
import {ThemeProvider} from "@mui/material";
import {theme} from "./Theme";

const StepContext = React.createContext(0)

const ListStepComponent = [<TypeLodging/>,<AddressMaps/> ]
function useStepContext(){
    return React.useContext(StepContext);
}
function TypeLodging(){
    return (
        <button>
            <h1>Hotel</h1>
            <p>Une Entreprise qui propose aux voyageurs des chambres privée, des suites ou des logments unique</p>
        </button>
    )
}

function SelectTypeLodging(){
    return (
        <TypeLodging/>
    )

}

function LeftForm({children}){
    return (
        <div className="LeftPart">
            {children}
        </div>
    )
}
function RightForm({children, nextStep, previousStep}){
    return (
        <div className="RigthPart">
            <div>{children}</div>
            <FooterRight previousStep={previousStep} nextStep={nextStep}/>
        </div>
    )
}
function Hosting(){
    const [step, setStep] = React.useState(0)
    console.log(step)
    const nextStep = () => {setStep(step+1) }
    const previousStep = () => {setStep(step- 1)}
    return(
        <div>
            <div className="Logo">
                <IconAirbnb/>
            </div>
        <StepContext.Provider value={step}>
            <ThemeProvider theme={theme}>
            <div className="grid">
                <LeftForm><h1>Address</h1></LeftForm>
                <RightForm  previousStep={previousStep} nextStep={nextStep}>{ListStepComponent[step]}</RightForm>
            </div>
            </ThemeProvider>
        </StepContext.Provider>
        </div>
    )
}

export default Hosting;