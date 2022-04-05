import React from 'react';
import {Icon, ListIcon, MapIcon} from "../Icon/Icon";

const ShowMapOrListButton = ({onClick, showOnlyMap}) => {
    return (
        <button onClick={onClick} className="result-page__show-button">
                <span style={{display: "flex"}}>
                    <span>Afficher la {showOnlyMap ? "liste" : "carte"}</span>
                    {
                        showOnlyMap ?
                            <Icon className="result-page__show-button-icon"><ListIcon/></Icon>
                            :
                            <Icon className="result-page__show-button-icon"><MapIcon/></Icon>
                    }

                </span>
        </button>
    );
};

export default ShowMapOrListButton;