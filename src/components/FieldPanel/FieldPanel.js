import "./FieldPanel.css"
const FieldPanel = ({children, align, isSelected, fieldName, className}) => {
    if (!isSelected) return null
    return (
        <>
            <div
                className={
                    (align === "right" ? "search-bar-panel align-panel-right" : "search-bar-panel")
                    + (fieldName === 'startDate' ? " search-bar-panel-start-date" : "")
                    + (fieldName === 'endDate' ? " search-bar-panel-end-date" : "")
                    + (className ? " " + className : "")
                }
            >
                {children}
            </div>
        </>
    )
}
export {FieldPanel};