
import React from "react";
import Avis from "./Avis";
import './Hebergement.css'
import { IconMedail,Icon, IconLocaliz, IconCalendrier} from '../Icon/Icon'
import EquipementIcon from "./EquipementIcon";

const Hebergement = ({item}) => {

    return(
        <div className="container__herbergement">
        {item.title}
        <Avis/>
        <div className="container__icon">
        <div>
          <Icon className="icon__stule">
            <IconMedail/> 
          </Icon>
          <p>Superhote</p>
        </div>
        <div>
          <Icon className="icon__stule">
            <IconLocaliz/>
          </Icon>
          <p>Cadre idéal</p>
        </div>
        <div>
          <Icon className="icon__stule">
            <IconCalendrier/> 
          </Icon>
          <p>Annulation gratuite possible jusqu'au 31 mai.</p>
        </div>
        </div>
        <div>
        {item.summary}
        </div>
        <EquipementIcon/>
        </div>
    )
}

export default Hebergement;