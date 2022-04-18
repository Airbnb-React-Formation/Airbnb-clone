import "./FieldPanel.css"
const FieldPanel = ({children, align, isSelected, fieldName, className}) => {
    if (!isSelected) return null
    return (
        <>
            <div
                className={
                    (align === "right" ? "FieldPanel FieldPanel--right" : "FieldPanel")
                    + (fieldName === 'startDate' ? " FieldPanel__start-date" : "")
                    + (fieldName === 'endDate' ? " FieldPanel__end-date" : "")
                    + (className ? " " + className : "")
                }
            >
                {children}
            </div>
        </>
    )
}
export {FieldPanel};