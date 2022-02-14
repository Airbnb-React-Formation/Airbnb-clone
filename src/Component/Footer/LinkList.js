import React, {useEffect} from "react";
import './LinkList.css'
//import { asistance } from "./datalinklist"; importer le bon
import { Link } from "react-router-dom";

const LinkList = ({title, tableau}) =>{
const data = tableau // changer 

useEffect(()=>{
    fetch(tableau) //changer
    .then(response =>{
        //console.log(response)
       return response.json()
    })
    .then(json =>{
       data(json[0])
    })
    .catch(error =>{
        console.log(error)
    })
},[data] )

console.log(`les datas sont ${data}`)
    return(
    <section>
        <h3>{title}</h3> {/*pensez a renomer*/}
        <ul>
            {data.map((data)=>
            <li key={data.id}><Link to={data.to}>{data.label}</Link></li>
            )}
            
        </ul>
    </section>
    )
} 

export default LinkList;