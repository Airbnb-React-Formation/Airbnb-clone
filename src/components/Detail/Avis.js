import React from "react";
import './Avis.css'
import { Icon, IconEtoile } from "../Icon/Icon";

const Avis = () =>{

    return (
        <div className="container__avis">
            <Icon className="icon__etoile">
            <IconEtoile />
            </Icon>
            <div>
            <p>Avis</p>
            </div>
            <div>
            <p>Commentaires</p>
            </div>
        </div>
    )
}
export default Avis;