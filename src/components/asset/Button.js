function Button({link, text, color}) {
    return (
        <div>
            <a href={link} style={{
                justifySelf: "center",
                borderRadius :"100rem",
                padding: "0.8rem 1.8rem",
                textDecoration: "none",
                display: "inline-block",
                backgroundColor : color
            }}>
                <span>{text}</span>
            </a>
        </div>)
}
export default Button;