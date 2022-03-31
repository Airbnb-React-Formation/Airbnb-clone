import React from "react";
import Hebergement from "./Hebergement";
import Modal from "./Modal";
import './ListDetail.css'
//import useSearchParamsToObject from '../../hook/useSearchParamsToObject'

const ListDetail = ({item, calendarProps}) =>{
    //const query = useSearchParamsToObject()
    //const {coordinates, destination, startdate, enddate} = query
    return(
        <div className="container__listDetail">
            <Hebergement item={item}/>
            <Modal item={item} 
            calendarProps={calendarProps}
            />
        </div>
    )
}

export default ListDetail;