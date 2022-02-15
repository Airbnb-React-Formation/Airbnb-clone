import "./SearchBarField.css"
import ResetFieldButton from "./ResetFieldButton";
import {Children, cloneElement, useRef} from "react";

const SearchBarField = ({title, placeholder, inputValue, onInputValue, selectedField, fieldName, onSelect,children,disabledInput}) => {
    const isSelected = selectedField === fieldName
    const inputRef = useRef()
    return (
        <>
            <div
                className={isSelected ? "button selected-field" : "button"}
                onClick={(e) => {
                    inputRef.current?.focus()
                    onSelect(fieldName)
                }}
            >
                <div>
                    <div>{title}</div>
                    {
                        disabledInput ?
                            <div className="placeholder">{placeholder}</div>
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
                <div className="btn-reset-container">
                    <ResetFieldButton onClick={() => onInputValue('')}/>
                </div>
            }
            {Children.map(children,child => cloneElement(child,{isSelected:isSelected}))}
        </>
    )
}

const FieldPanel = ({children,align, isSelected}) => {
    if (!isSelected) return null
    return (
        <>
            <div
                className={align === "right" ? "search-bar-panel align-panel-right" : "search-bar-panel"}
            >
                {children}
            </div>
        </>
    )
}


export {SearchBarField, FieldPanel}