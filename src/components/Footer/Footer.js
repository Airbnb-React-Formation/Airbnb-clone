import React from "react";
import './Footer.css'
import LinkList from "./LinkList";
import LittleFooter from "./LittleFooter"
import {assistance, communaute, accueilEtVoyageur, aPropos} from "./datalinklist";


const Footer = () => {

    return (
        <footer className='thefooter'>
            <section className="resection">
                <LinkList title="Asistance" tableau={assistance}/>
                <LinkList title="Communauté" tableau={communaute}/>
                <LinkList title="Accueil et voyageur" tableau={accueilEtVoyageur}/>
                <LinkList title="A Propos" tableau={aPropos}/>
            </section>
            <section>
                <LittleFooter/>
            </section>
        </footer>
    )
}

export default Footer;