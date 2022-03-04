import Button from "../asset/Button"
import Footer from "../Footer/Footer";
import FooterRight from "./FooterRight";
import React from 'react';
import { useNavigate } from "react-router-dom";

function BecomeHostIntroLeftPartVideo(){
    return(
        <div className="left-part-with-image-background"/>
    )
}
function  BecomeHostIntroRight(){
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = "/hosting";
        navigate(path);
        console.log("path")
    }
   return (
       <div className="r-part-with-image-background">
           <div style={{
               display:"flex",
               flexDirection: "row"
           }}>
               <div style={{
                   flexGrow: 0,
                   flexShrink: 0,
                   flexBasis: 1
               }}>
               <Button text={"Quitter"} link={"/"} color={"gray"}></Button>
               </div>
           </div>
        <h1>Devenez hôte en 10 étapes simple</h1>
        <h3>Rejoignez-nous. Nous allons vous aider pour chacune de ces étapes</h3>
        <FooterRight nextStep={routeChange} text={"Démarrer"}/>
    </div>
   )
}



function BecomeHostIntro(){
    return(
        <div className="grid">
            <BecomeHostIntroLeftPartVideo/>
            <BecomeHostIntroRight/>
        </div>
    )
}

export default BecomeHostIntro ;