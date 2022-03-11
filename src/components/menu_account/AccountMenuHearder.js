import "./AccountMenuHeader.scss";
import React, {useRef} from "react";
import AccountMenuHeaderItem from "./AccountMenuHeaderItem";
import {MenuBarIcon, MenuProfileIcon} from "../Icon/Icon";
import useClickOutside from "../../hook/useClickOutside";

const payload_disconnect = [
    {text: "Inscription", bold : true},
    { text: "Connexion" , bold: false },
    {} ,
    {text: "Hebergement de voyageur", bold: false } ,
    {text: "Créer une Expérience ", bold: false},
    {},
    {text: "Aide", bold: false }
]

const payload_connect = [
    {text: "Messages" , bold : true},
    {text: "Notification", bold: true, notification: true},
    {text: "Voyages" , bold: true},
    {text:  "Favoris", bold: true},
    {},
    {text: "Gérer mes annonces", bold: false, notification: true},
    {text: "Créer une Expérience ", bold: false},
    {text: "Parrainer un hôte ", bold: false},
    {text: "Compte", bold: false},
    {},
    {text: "Aide", bold: false }
]

function AccountMenuHeader(){
    const [displayMenuHeader , setDisplayMenuHeader ] = React.useState(false)
    const handleClick = () =>{
        setDisplayMenuHeader(!displayMenuHeader);
    }
    const accountMenuRef = useRef()
    useClickOutside(accountMenuRef,()=>setDisplayMenuHeader(false))
    return (
        <div ref={accountMenuRef} className="header-profile-menu-parent-button">
            <button onClick={handleClick} className="header-profile-menu-button">
                <div>
                    <MenuBarIcon/>
                </div>
                <div>
                    <MenuProfileIcon size={"16px"}/>
                </div>
            </button>
            {displayMenuHeader ? <AccountMenuHeaderOnClick /> : <span/>}
        </div>
    )

}

function AccountMenuHeaderOnClick(){
 //   const [connected, setConnected ]= React.useState();

    const connected = true;
    const payload = (connected) ? payload_connect : payload_disconnect;
    const listMenu = payload.map((element,i) =>{ return  <AccountMenuHeaderItem key={i} text={element.text} bold={element.bold} notification={element.notification}  />})
    return  <div className="header-profile-menu">
        {listMenu}
    </div>
}

export default AccountMenuHeader
