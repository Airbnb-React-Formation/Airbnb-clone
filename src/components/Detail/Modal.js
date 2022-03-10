import React from "react";
import Button from "../asset/Button.js";
import Avis from "./Avis.js";
import DateModal from "./DateModal.js";
import Facture from "./Facture.js";
import './Modal.css'
import Prix from "./Prix.js";
import VoyageurModal from "./Voyageur.js";


const Modal = ({item}) =>{
    return(
     <div className="modale__container">
          <Prix item={item}/>
          <Avis/>
          <DateModal/>
          <VoyageurModal/>
          <Button link={"/"} text="Reserver"/>
          <Facture item={item}/>
     </div>)
}

export default Modal;