import React from "react";

const Galerie = () =>{
    const photo = [
        { id : "grd1", alt : "un entier", url : "https://a0.muscache.com/im/pictures/18f9fefc-faaf-4a2f-a95d-416ecbbf7d61.jpg?im_w=960"},
        { id : "p1", alt : "quart 1", url : "https://a0.muscache.com/im/pictures/10c34ee1-d3fc-4e7a-94f9-9d65907502b3.jpg?im_w=1200"},
        { id : "p2", alt : "quart 2", url : "https://a0.muscache.com/im/pictures/fb7584d2-f5a9-4d36-81ba-6b13e716ee6c.jpg?im_w=1200"},
        { id : "p3", alt : "quart 3", url : "https://a0.muscache.com/im/pictures/59beb7b3-e15d-434c-b30d-09eec2a421a6.jpg?im_w=1200"},
        { id : "p4", alt : "quart 4", url : "https://a0.muscache.com/im/pictures/9a185e74-3600-46fe-983d-51b528d9753b.jpg?im_w=1200"},
    ]
    return(
        <div className="galerie__container">
            {photo.map((photo)=> 
            <div id={photo.id}><img src={photo.url} alt={photo.alt}></img> </div>
            )}

        </div>
    )
}

export default Galerie;