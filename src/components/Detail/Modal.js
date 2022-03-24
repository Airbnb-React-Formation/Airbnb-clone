import React from "react";
import Button from "../asset/Button.js";
import Avis from "./Avis.js";
import DateModal from "./DateModal.js";
import Facture from "./Facture.js";
import './Modal.css'
import Prix from "./Prix.js";
import VoyageurModal from "./Voyageur.js";



const Modal = ({item, calendarProps}) =>{
    return(
     <div className="modale__container">
          <Prix item={item}/>
          <Avis/>
          <DateModal 
          calendarProps={calendarProps}/>
          <VoyageurModal/>
          <Button link={"/"} text="Reserver"/>
          <div className="modale__container__facture">
          <Facture item={item}/>
          </div>
     </div>)
}

export default Modal;