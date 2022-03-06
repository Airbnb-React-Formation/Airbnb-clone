import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Galerie from "./Galerie";
import accommodations from '../../data/accommodations.json';
import ListDetail from "./ListDetail";
import Commentaires from "./Commentaire";


const Detail = () => {
   const item = accommodations[0]
  
    return(
        <>
         <SearchBar/>
          <Galerie item={item}/>
          <ListDetail item={item}/>
          <Commentaires/>
        </>
    )
}

export default Detail;