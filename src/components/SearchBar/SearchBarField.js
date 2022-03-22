import "./SearchBarField.css"
import ResetFieldButton from "./ResetFieldButton";
import {Children, cloneElement, useEffect, useRef} from "react";

const SearchBarField = ({
                            title,
                            placeholder,
                            inputValue,
                            onInputValue,
                            selectedField,
                            fieldName,
                            onSelect,
                            children,
                            disabledInput,
                            onReset
                        }) => {
    const isSelected = selectedField === fieldName
    const inputRef = useRef()
    useEffect(() => {
        if (isSelected) {
            inputRef.current?.focus()
        }
    }, [isSelected])
    return (
        <>
            <div
                className={isSelected ? "button selected-field" : "button"}
                onClick={() => {
                    inputRef.current?.focus()
                    onSelect(fieldName)
                }}
                style={{overflow: "hidden", width: "100%"}}
            >
                <div>
                    <div>{title}</div>
                    {
                        disabledInput ?
                            <div className="placeholder">{inputValue ? inputValue : placeholder}</div>
                            :
                            <input disabled={disabledInput}
                                   ref={inputRef}
                                   placeholder={placeholder}
                                   value={inputValue}
                                   onChange={(e) => onInputValue(e.target.value)}
                            />
                    }
                </div>

            </div>
            {isSelected && inputValue
                &&
                <div style={{position: "relative", flex: "0 0 0%"}}>
                    <div className="btn-reset-container">
                        <ResetFieldButton onClick={onReset}/>
                    </div>
                </div>
            }

            {Children.map(children, child => cloneElement(child, {isSelected: isSelected, fieldName: fieldName}))}
        </>
    )
}

const FieldPanel = ({children, align, isSelected, fieldName}) => {
    if (!isSelected) return null
    return (
        <>
            <div
                className={
                    (align === "right" ? "search-bar-panel align-panel-right" : "search-bar-panel")
                    + (fieldName === 'startDate' ? " search-bar-panel-start-date" : "")
                    + (fieldName === 'endDate' ? " search-bar-panel-end-date" : "")
                }
            >
                {children}
            </div>
        </>
    )
}


export {SearchBarField, FieldPanel}