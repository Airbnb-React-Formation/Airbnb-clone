import React, { useState } from "react";


const Voyageur = ({children, value, handleChange}) =>{
    
    const handleIncrease = () => handleChange(value + 1) 
    const handleDecrease = () => handleChange(value -1)

    return(
        <div>
            <p>{children}</p>
            <button onClick={handleDecrease}>-</button>
            <input value={value}/>
            <button  onClick={handleIncrease}>+</button>
        </div>
    )
}



const VoyageurModal = () => {
    const[enfant, setEnfant] = useState (0)
    const [adulte, setAdulte] = useState (0)
    const [animal, setAnimal] = useState (0)
    const [bebe, setBebe] = useState(0)
    const [etat, setEtat] = useState('false')
    const handleEtat = () =>{
        setEtat( etat => !etat)
    }

    return(
        <>
        <button onClick={handleEtat}> Voyageur <br/>  {adulte} , {enfant}, {bebe}, {animal} </button>

        <div hidden ={etat}>
        <Voyageur children={'Adultes 13ans +'} value={adulte} handleChange ={setAdulte} />
        <Voyageur children={'Enfant + 2ans -13ans'} value={enfant} handleChange ={setEnfant}/>
        <Voyageur children={'Bébé de -2 ans'} value={bebe}  handleChange ={setBebe}/>
        <Voyageur children={'Animal de compagnie'} value={animal}  handleChange ={setAnimal}/>
        </div>
        </>
    )
}

export default VoyageurModal;
