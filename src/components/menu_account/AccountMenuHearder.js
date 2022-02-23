import "./AccountMenuHeader.css"
import React from "react";
import AccountMenuHeaderItem from "./AccountMenuHeaderItem";

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
function MenuBarIcon(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
    )
}
function AccountMenuHeader(){
    const [displayMenuHeader , setDisplayMenuHeader ] = React.useState(false)
    const handleClick = event =>{
        setDisplayMenuHeader(!displayMenuHeader);
    }
    return (
        <div>
            <button onClick={handleClick}>
                <MenuBarIcon/>
            </button>
            {displayMenuHeader ? <AccountMenuHeader/> : <span/>}
        </div>
    )

}

function AccountMenuHeaderOnClick(){
 //   const [connected, setConnected ]= React.useState();
    const connected = true;
    const payload = (connected) ? payload_connect : payload_disconnect;
    console.log(payload)
    const listMenu = payload.map(element =>{console.log(element); return  <AccountMenuHeaderItem text={element.text} bold={element.bold} notification={element.notification}  />})
    return  <div className="header-profile-menu">
        {listMenu}
    </div>
}

export default AccountMenuHeader
