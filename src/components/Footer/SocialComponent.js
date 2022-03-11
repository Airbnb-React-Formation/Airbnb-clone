import React from "react";
import './SocialComponent.css'
import {IconFacebook, IconTwitter, IconInstagram, Icon} from "../Icon/Icon";

const SocialComponents = () => {

    return (
        <div className="socialComponent">
            <Icon className="social-component__icon">
                <IconFacebook/>
            </Icon>
            <Icon className="social-component__icon">
                <IconInstagram/>
            </Icon>
            <Icon className="social-component__icon">
                <IconTwitter/>
            </Icon>
        </div>)
}

export default SocialComponents;