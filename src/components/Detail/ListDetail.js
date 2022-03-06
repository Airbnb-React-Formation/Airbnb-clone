import React from "react";
import Hebergement from "./Hebergement";
import Modal from "./Modal";
import './ListDetail.css'

const ListDetail = ({item}) =>{

    return(
        <div className="container__listDetail">
            <Hebergement/>
            <Modal item={item}/>
        </div>
    )
}

export default ListDetail;