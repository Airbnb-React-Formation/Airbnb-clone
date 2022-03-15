import "./AccountMenuHeader.scss";
import React, {useRef, useState} from "react";
import AccountMenuHeaderItem from "./AccountMenuHeaderItem";
import {MenuBarIcon, MenuProfileIcon} from "../Icon/Icon";
import useClickOutside from "../../hook/useClickOutside";
import LoginModal from "../LoginModal/LoginModal";
import {DialogContent, Modal} from "@mui/material";


function AccountMenuHeader() {
    const [displayMenuHeader, setDisplayMenuHeader] = React.useState(false)
    const [isSignInLogInModal, setIsSignInLogInModal] = useState(false)
    const handleOpen = () => {
        setDisplayMenuHeader(false)
        setIsSignInLogInModal(true)
    }
    const handleClose = () => setIsSignInLogInModal(false)
    const handleClick = () => {
        setDisplayMenuHeader(!displayMenuHeader);
    }
    const accountMenuRef = useRef()
    useClickOutside(accountMenuRef, () => setDisplayMenuHeader(false))
    return (
        <>
            <div ref={accountMenuRef} className="header-profile-menu-parent-button">
                <button onClick={handleClick} className="header-profile-menu-button">
                    <div>
                        <MenuBarIcon/>
                    </div>
                    <div>
                        <MenuProfileIcon size={"16px"}/>
                    </div>
                </button>
                {displayMenuHeader ? <AccountMenuHeaderOnClick onClickActions={{signInLogInModal: handleOpen}}/> :
                    <span/>}
            </div>
            <Modal open={isSignInLogInModal} onClose={handleClose}>
                <DialogContent>
                    <LoginModal onClose={handleClose}/>
                </DialogContent>
            </Modal>
        </>
    )

}

function AccountMenuHeaderOnClick({onClickActions}) {

    const payload_disconnect = [
        {text: "Inscription", bold: true, onClick: onClickActions.signInLogInModal},
        {text: "Connexion", bold: false, onClick: onClickActions.signInLogInModal},
        {},
        {text: "Hebergement de voyageur", bold: false},
        {text: "Créer une Expérience ", bold: false},
        {},
        {text: "Aide", bold: false}
    ]
    const payload_connect = [
        {text: "Messages", bold: true},
        {text: "Notification", bold: true, notification: true},
        {text: "Voyages", bold: true},
        {text: "Favoris", bold: true},
        {},
        {text: "Gérer mes annonces", bold: false, notification: true},
        {text: "Créer une Expérience ", bold: false},
        {text: "Parrainer un hôte ", bold: false},
        {text: "Compte", bold: false},
        {},
        {text: "Aide", bold: false}
    ]
    //   const [connected, setConnected ]= React.useState();

    const connected = false;
    const payload = (connected) ? payload_connect : payload_disconnect;
    const listMenu = payload.map((element, i) => {
        return (
            <AccountMenuHeaderItem
                key={i}
                text={element.text}
                bold={element.bold}
                notification={element.notification}
                onClick={element.onClick}
            />
        )
    })
    return <div className="header-profile-menu">
        {listMenu}
    </div>
}

export default AccountMenuHeader
