import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Galerie from "./Galerie";
import Modal from "./Modal";
import accommodations from '../../data/accommodations.json';

const Detail = () => {
   const item = accommodations[0]
  
    return(
        <>
         <SearchBar/>
          <Galerie item={item}/>
          <Modal item={item}/>
        
        </>
    )
}

export default Detail;