import React from "react";
import Avis from "./Avis.js";
import DateModal from "./DateModal.js";
import './Modal.js'
import Prix from "./Prix.js";





const Modal = ({item}) =>{
    return(<div className="modal__container">
        <div className="prix__container">
          <Prix item={item}/>
          <Avis/>
        </div>
        <div>
            <DateModal />
        </div>
        

    </div>)
}

export default Modal;