import "./AccountMenuHeaderItem.css";

function AccountMenuHeaderNotification(){
    return(
        <span className="notification-badge"/>
    )
}

function AccountMenuHeaderItem({text , bold, notification}) {
    if(text == null){
        return <div className="section-bar"/>
    }
    const className = (bold)? "bold" : ""
    return (
        <div>
            <p className={className}>{text}
                {notification ? <AccountMenuHeaderNotification/> : <span/> }
            </p>
            </div>
    )
}

export default  AccountMenuHeaderItem

