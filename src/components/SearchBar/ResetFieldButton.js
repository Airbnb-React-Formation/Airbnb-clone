import "./ResetFieldButton.css"

const ResetFieldButton = ({onClick}) => {
    return (
            <div className="btn-reset" onClick={onClick}>
                <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                        display: "block",
                        fill: "none",
                        height: "12px",
                        width: "12px",
                        stroke: "currentcolor",
                        strokeWidth: "4",
                        overflow: "visible"
                    }}>
                    <path d="m6 6 20 20"></path>
                    <path d="m26 6-20 20"></path>
                </svg>
            </div>
    )
}

export default ResetFieldButton