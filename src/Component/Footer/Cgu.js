import React from "react";
import './Cgu.css'

const Cgu = () =>{
const condition = [
    
        {id : 123 , label : "Confidentialité", url : "https://www.airbnb.fr/help/article/2855/protection-des-donn%C3%A9es-sur-airbnb"},
        {id : 231, label : "Condition générales", url : "https://www.airbnb.fr/help/article/2908/conditions-de-service"},
        {id : 213, label : "plan du site", url : "https://www.airbnb.fr/sitemaps/v2"},
        {id : 321, label : "Fonctionnement du site", url : "https://www.airbnb.fr/fonctionnement_du_site"},
        {id : 312, label : "Infos sur l'entreprise", url : "https://www.airbnb.fr/about/company-details"}
    
]
    return(<article>
        <ul className="cguUl">
            {condition.map((condition) =>
            <li className="cguLi" key={condition.id}><a href= {condition.url}>{condition.label}</a> </li>)}
        </ul>
    </article>)
} 

export default Cgu;