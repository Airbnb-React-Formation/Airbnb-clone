import React from "react";
import './SocialComponent.css'
import {SiInstagram, SiFacebook, SiTwitter } from 'react-icons/si'

const SocialComponents = () =>{

    return(<article className="thefooterlogo">
        <SiFacebook />
        <SiInstagram/>
        <SiTwitter/> 
    </article>)
} 

export default SocialComponents;