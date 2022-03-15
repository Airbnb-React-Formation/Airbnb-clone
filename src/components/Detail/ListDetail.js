import React from "react";
import Hebergement from "./Hebergement";
import Modal from "./Modal";
import './ListDetail.css'

const ListDetail = ({item, calendarProps}) =>{

    return(
        <div className="container__listDetail">
            <Hebergement item={item}/>
            <Modal item={item} 
            calendarProps={calendarProps}/>
        </div>
    )
}

export default ListDetail;