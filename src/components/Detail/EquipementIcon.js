import React from "react"
import Button from '../asset/Button'
import { Icon } from "../Icon/Icon"
import './EquipementIcon.css'


const EquipementIcon = () =>{
const iconEquipement = [
    {id : "incon1", label :"Cuisine", url : <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="presentation" focusable="false"><path d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z"></path></svg>, height:"24px", widht:"24px" },
    {id : "incon2", label :"Télévision", url : <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="presentation" focusable="false"><path d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"></path></svg>, height:"24px", widht:"24px" },
    {id : "incon3", label :"Sèche-cheveux", url :<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="presentation" focusable="false"><path d="M14 27l-.005.2a4 4 0 0 1-3.789 3.795L10 31H4v-2h6l.15-.005a2 2 0 0 0 1.844-1.838L12 27zM10 1c.536 0 1.067.047 1.58.138l.38.077 17.448 3.64a2 2 0 0 1 1.585 1.792l.007.166v6.374a2 2 0 0 1-1.431 1.917l-.16.04-13.554 2.826 1.767 6.506a2 2 0 0 1-1.753 2.516l-.177.008H11.76a2 2 0 0 1-1.879-1.315l-.048-.15-1.88-6.769A9 9 0 0 1 10 1zm5.692 24l-1.799-6.621-1.806.378a8.998 8.998 0 0 1-1.663.233l-.331.008L11.76 25zM10 3a7 7 0 1 0 1.32 13.875l.331-.07L29 13.187V6.813L11.538 3.169A7.027 7.027 0 0 0 10 3zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path></svg> , height:"24px", widht:"24px" },
    {id : "incon4", label :"Four à micro-ondes", url : <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="presentation" focusable="false"><path d="M29 3a2 2 0 0 1 1.995 1.85L31 5v22a2 2 0 0 1-1.85 1.995L29 29H3a2 2 0 0 1-1.995-1.85L1 27V5a2 2 0 0 1 1.85-1.995L3 3zm0 2H3v22h26zm-6 2v18H5V7zm-2 2H7v14l3 .001a4.975 4.975 0 0 1-.992-2.721L9 20v-3h10v3a4.978 4.978 0 0 1-1 3.001L21 23zm-4 10h-6v1a3 3 0 0 0 2.65 2.98l.174.015L14 23a3 3 0 0 0 2.995-2.824L17 20zm9-8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg> , height:"24px", widht:"24px" },
    {id : "incon5", label :"Wifi", url :<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="presentation" focusable="false"><path d="m15.9999 20.33323c2.0250459 0 3.66667 1.6416241 3.66667 3.66667s-1.6416241 3.66667-3.66667 3.66667-3.66667-1.6416241-3.66667-3.66667 1.6416241-3.66667 3.66667-3.66667zm0 2c-.9204764 0-1.66667.7461936-1.66667 1.66667s.7461936 1.66667 1.66667 1.66667 1.66667-.7461936 1.66667-1.66667-.7461936-1.66667-1.66667-1.66667zm.0001-7.33323c3.5168171 0 6.5625093 2.0171251 8.0432368 4.9575354l-1.5143264 1.5127043c-1.0142061-2.615688-3.5549814-4.4702397-6.5289104-4.4702397s-5.5147043 1.8545517-6.52891042 4.4702397l-1.51382132-1.5137072c1.48091492-2.939866 4.52631444-4.9565325 8.04273174-4.9565325zm.0001-5.3332c4.9804693 0 9.3676401 2.540213 11.9365919 6.3957185l-1.4470949 1.4473863c-2.1746764-3.5072732-6.0593053-5.8431048-10.489497-5.8431048s-8.31482064 2.3358316-10.48949703 5.8431048l-1.44709488-1.4473863c2.56895177-3.8555055 6.95612261-6.3957185 11.93659191-6.3957185zm-.0002-5.3336c6.4510616 0 12.1766693 3.10603731 15.7629187 7.9042075l-1.4304978 1.4309874c-3.2086497-4.44342277-8.4328305-7.3351949-14.3324209-7.3351949-5.8991465 0-11.12298511 2.89133703-14.33169668 7.334192l-1.43047422-1.4309849c3.58629751-4.79760153 9.31155768-7.9032071 15.7621709-7.9032071z"></path></svg> , height:"24px", widht:"24px" },
    {id : "incon6", label :"Dépot de bagages autorisé", url :<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="presentation" focusable="false"><path d="M30 29v2H2v-2zM20 1a2 2 0 0 1 1.995 1.85L22 3v2h3a5 5 0 0 1 4.995 4.783L30 10v12a5 5 0 0 1-4.783 4.995L25 27H7a5 5 0 0 1-4.995-4.783L2 22V10a5 5 0 0 1 4.783-4.995L7 5h3V3a2 2 0 0 1 1.85-1.995L12 1zm5 6H7a3 3 0 0 0-2.995 2.824L4 10v12a3 3 0 0 0 2.824 2.995L7 25h18a3 3 0 0 0 2.995-2.824L28 22V10a3 3 0 0 0-3-3zm-8 2v9.5l3.293-3.293 1.414 1.414-4.646 4.647-.114.103a1.5 1.5 0 0 1-1.894 0l-.114-.103-4.646-4.647 1.414-1.414L15 18.5V9zm3-6h-8v2h8z"></path></svg> , height:"24px", widht:"24px" },
    {id : "incon7", label :"Réfrigérateur", url : <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="presentation" focusable="false"><path d="M25 1a2 2 0 0 1 1.995 1.85L27 3v26a2 2 0 0 1-1.85 1.995L25 31H7a2 2 0 0 1-1.995-1.85L5 29V3a2 2 0 0 1 1.85-1.995L7 1zm0 10H7v18h18zm-15 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM25 3H7v6h18zM10 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>, height:"24px", widht:"24px" },
    {id : "incon8", label :"Logement fumeur ", url :<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="presentation" focusable="false"><path d="M30 19v8h-2v-8zm-4 0v8H3a2 2 0 0 1-1.995-1.85L1 25v-4a2 2 0 0 1 1.85-1.995L3 19zm-2 2H3v4h21zM21 3a4 4 0 0 1 3.356 6.178l-.1.145.137.041a8.004 8.004 0 0 1 5.603 7.387L30 17h-2a6 6 0 0 0-5.775-5.996L22 11h-1V9a2 2 0 0 0 .15-3.995L21 5zm-4 0v2a4 4 0 0 0-.2 7.995L17 13h5a4 4 0 0 1 3.995 3.8L26 17h-2a2 2 0 0 0-1.85-1.995L22 15h-5a6 6 0 0 1-.225-11.996z"></path></svg> , height:"24px", widht:"24px" },
    {id : "incon9", label :"Eau chaude", url : <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="presentation" focusable="false"><path d="M16 32c6.627 0 12-5.373 12-12 0-6.218-3.671-12.51-10.924-18.889L16 .18l-1.076.932C7.671 7.491 4 13.782 4 20c0 6.577 5.397 12 12 12zm0-2c-5.496 0-10-4.525-10-10 0-5.327 3.115-10.882 9.424-16.65l.407-.37.169-.149.576.518c6.043 5.526 9.156 10.855 9.407 15.977l.013.34L26 20c0 5.523-4.477 10-10 10zm-3.452-5.092a8.954 8.954 0 0 1 2.127-4.932l.232-.26.445-.462a6.973 6.973 0 0 0 1.827-4.416l.007-.306-.006-.307-.007-.11a6.03 6.03 0 0 0-2.009-.057 4.979 4.979 0 0 1-1.443 4.008 10.951 10.951 0 0 0-2.87 5.016 6.034 6.034 0 0 0 1.697 1.826zM16 26l.253-.005.25-.016-.003-.137c0-1.32.512-2.582 1.464-3.533a10.981 10.981 0 0 0 3.017-5.656 6.026 6.026 0 0 0-1.803-1.743 8.971 8.971 0 0 1-2.172 5.493l-.228.255-.444.462a6.96 6.96 0 0 0-1.827 4.415l-.006.276c.48.123.982.189 1.499.189z"></path></svg> , height:"24px", widht:"24px" },
    {id : "incon10", label :"Console de jeu", url :<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="presentation" focusable="false"><path d="M30 2v2h-8a5 5 0 0 0-4.995 4.783L17 9v5h9a4 4 0 0 1 3.995 3.8L30 18v8a4 4 0 0 1-3.8 3.995L26 30H6a4 4 0 0 1-3.995-3.8L2 26v-8a4 4 0 0 1 3.8-3.995L6 14h9V9a7 7 0 0 1 6.76-6.996L22 2h8zm-4 14H6a2 2 0 0 0-1.995 1.85L4 18v8a2 2 0 0 0 1.85 1.995L6 28h20a2 2 0 0 0 1.995-1.85L28 26v-8a2 2 0 0 0-1.85-1.995L26 16zm-15 3v2h2v2h-2v2H9v-2H7v-2h2v-2h2zm13 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg> , height:"24px", widht:"24px" },

]

return(
    <div className="container__equipementIcon">
        <h2>Ce que propose ce logement</h2>
        <div className="container__equipementIcon__icon">
        {iconEquipement.map((iconEquipement)=>
        <Icon key={iconEquipement.id} >
            {iconEquipement.url}
            {iconEquipement.label}
        </Icon>
        )}
        </div>
        
    
        <Button link="/" text="Plus d'équipement"/>

    </div>
)
}


export default EquipementIcon;

     /* <ul>
        {iconEquipement.map((iconEquipement)=>
        <li style={{height : iconEquipement.height, width : iconEquipement.widht }} key={iconEquipement.id}> {iconEquipement.url} <p>{iconEquipement.label} </p></li> 
        )}
        </ul> */
