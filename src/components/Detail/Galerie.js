import React from "react";
import "./Galerie.css"

const Galerie = ({item}) =>{
    const photo = [
        { id : "grd1", alt : "un entier", url : item.pictures[0], width : "350", height : "350"},
        { id : "p1", alt : "quart 1", url : item.pictures[1], width :"175", height : "175"},
        { id : "p2", alt : "quart 2", url : item.pictures[2], width :"175", height : "175"},
        { id : "p3", alt : "quart 3", url : item.pictures[3], width :"175", height : "175"},
        { id : "p4", alt : "quart 4", url : item.pictures[4], width :"175", height : "175"},
    ]
    return(
        <div className="galerie__container">
        <div className="galerie__grid">
            {photo.map((photo)=> 
            <div key={photo.id} className={photo.id}><img src={photo.url} alt={photo.alt} width ={photo.width} height={photo.height}></img> </div>
            )}
        </div>
        </div>
    )
}

export default Galerie;