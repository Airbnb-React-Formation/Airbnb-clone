import React from "react";
import './LinkList.css'
import { fetchApiFalse } from "./datalinklist";
import { Link } from "react-router-dom";

const LinkList = () =>{
const data = fetchApiFalse().assistance

console.log(`les datas sont ${data}`)
    return(
    <section>
        <h3>Asistance</h3>
        <ul>
            {data.map((data)=>
            <li key={data.id}><Link to={data.to}>{data.label}</Link></li>
            )}
            
        </ul>
    </section>
    )
} 

export default LinkList;