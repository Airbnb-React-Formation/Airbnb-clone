import React from "react";
import './Footer.css'
import LinkList from "./LinkList";
import LittleFooter from "./LittleFooter"
import {asistance, communauté, acceuilEtVoyageur, aPropos} from "./datalinklist";


const Footer = () => {

    return (
        <footer className='thefooter'>
            <section className="resection">
                <LinkList title="Asistance" tableau={asistance}/>
                <LinkList title="Communauté" tableau={communauté}/>
                <LinkList title="Accueil et voyageur" tableau={acceuilEtVoyageur}/>
                <LinkList title="A Propos" tableau={aPropos}/>
            </section>
            <section>
                <LittleFooter/>
            </section>
        </footer>
    )
}

export default Footer;