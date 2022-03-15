import React from "react";
import Avis from "./Avis";

const Titre = ({item}) =>{

    return(
        <div>
            {item.title}
            <Avis/>
        </div>
    )
}

export default Titre;