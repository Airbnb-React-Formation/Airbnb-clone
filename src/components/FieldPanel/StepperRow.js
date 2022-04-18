import "./StepperRow.css"
const StepperRow = ({children,maxValue,value,handleChange,minValue = 0}) => {
    const handleIncrease = () => handleChange(value + 1)
    const handleDecrease = () => handleChange(value -1)

    return (
    <div className="StepperRow">
            <div>
                {children}
            </div>
            <div className="Stepper">
                <button className="Stepper__button" disabled={value === minValue } onClick={handleDecrease}>-</button>
                <div className="value">{value}</div>
                <button className="Stepper__button" disabled={value === maxValue} onClick={handleIncrease}>+</button>
            </div>
        </div>
    )

}

const StepperTitle = ({children}) => (
    <div className="Stepper__title">{children}</div>
    )


const StepperSubTitle = ({children}) => (
    <div className="Stepper__subtitle">{children}</div>
    )

const StepperLink = ({children}) => (
    <div className="stepper-link">{children}</div>
)



export {StepperRow,StepperTitle,StepperSubTitle,StepperLink}