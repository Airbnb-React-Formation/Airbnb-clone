import './Titre.css'
import React from 'react'
import Avis from './Avis'

const Titre = ({item}) =>{
    return(
        <div className='container__titre'>
             <h2>{item.title}</h2>
            <ul>
              <li>Voyageur: {item.maxGuest}</li>
              <li>Chambre : {item.bedrooms}</li>
              <li>{item.beds} lits</li>
              <li>{item.bathrooms} salle de bain</li>
            </ul>
            <Avis/>
        </div>
    )
}

export default Titre;