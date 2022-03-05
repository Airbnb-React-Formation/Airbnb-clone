import React from "react";
import './Prix.css'

const Prix = ({item}) =>{
     
    return(
        <div>
            <span>{item.pricePerNight}€</span>
            <span> /nuit</span>
        </div> 
    )
}

export default Prix;