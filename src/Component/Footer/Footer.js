import React from "react";
import './Footer.css'
import LinkList from "./LinkList";
import LittleFooter from "./LittleFooter"
import { asistance, communauté, acceuilEtVoyageur,aPropos } from "./datalinklist";


const Footer = () =>{

    return(<footer>
        <LinkList title = "Asistance" tableau={asistance}/>
        <LinkList title = "Communauté" tableau={communauté}/>
        <LinkList title = "Accueil et voyaguer" tableau={acceuilEtVoyageur}/>
        <LinkList title = "A Propos" tableau={aPropos}/>
        <LittleFooter></LittleFooter>
        </footer>
    )
} 

export default Footer;