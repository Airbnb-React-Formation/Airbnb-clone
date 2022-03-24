import React from "react";


const Facture = ({item}) =>{
    
    return(
        <table >
            <tr>
                <th>prix par nuit</th>
                <th> {item.pricePerNight}</th>
            </tr>
            <tr>
               <th>Reduction applicable</th>
                <th> 164€</th>
            </tr>
            <tr>
                <th>frais de service</th>
                <th>93€</th>
            </tr>
            <tr>
            <th>Total</th>
            <th>695€</th>
            </tr>
            
        </table>

        
    )

}

export default Facture;