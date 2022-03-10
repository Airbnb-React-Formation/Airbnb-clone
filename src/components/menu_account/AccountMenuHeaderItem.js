import "./AccountMenuHeaderItem.css";

function AccountMenuHeaderNotification() {
    return (
        <span className="notification-badge"/>
    )
}

function AccountMenuHeaderItem({text, bold, notification}) {
    if (text == null) {
        return <div className="section-bar"/>
    }
    const className = (bold) ? "bold" : ""
    return (
        <div className="header-profile-menu__item">
            <span className={className}>{text}
                {notification ? <AccountMenuHeaderNotification/> : <span/>}
            </span>
        </div>
    )
}

export default AccountMenuHeaderItem

