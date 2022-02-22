import React from "react";
import './SocialComponent.css'
import {SiInstagram, SiFacebook, SiTwitter } from 'react-icons/si'

const SocialComponents = () =>{

    return(<article className="thefooterlogo">
        <ul>
        <li><SiFacebook /></li>
        <li><SiInstagram/></li>
        <li><SiTwitter/> </li>
        </ul>
    </article>)
} 

export default SocialComponents;