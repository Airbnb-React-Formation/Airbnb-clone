import "./StepperRow.css"
import {Children, cloneElement, Fragment, useState} from "react";
const StepperRow = ({children,maxValue,value,handleChange}) => {
    // const [value,setValue] = useState(0)
    const handleIncrease = () => handleChange(value + 1)
    const handleDecrease = () => handleChange(value -1)

    return (
    <div className="stepper-row">
            <div>
                {children.map(child => child)}
            </div>
            <div className="stepper">
                <button className="stepper-button" disabled={value === 0} onClick={handleDecrease}>-</button>
                <div className="value">{value}</div>
                <button className="stepper-button" disabled={value === maxValue} onClick={handleIncrease}>+</button>
            </div>
        </div>
    )

}

const StepperTitle = ({children}) => (
    <div className="stepper-title">{children}</div>
    )


const StepperSubTitle = ({children}) => (
    <div className="stepper-subtitle">{children}</div>
    )

const StepperLink = ({children}) => (
    <div className="stepper-link">{children}</div>
)



export {StepperRow,StepperTitle,StepperSubTitle,StepperLink}