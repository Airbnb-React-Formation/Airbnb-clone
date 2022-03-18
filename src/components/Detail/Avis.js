import React from "react";
import './Avis.css'
import { Icon, IconEtoile } from "../Icon/Icon";

const Avis = () =>{

    return (
        <div>
            <Icon className="icon__etoile">
            <IconEtoile />
            </Icon>
            <span>Avis</span>
            <span>commentaire</span>
        </div>
    )
}
export default Avis;