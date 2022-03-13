import React, { useState } from "react";





const Voyageur = ({children, value, handleChange}) =>{
    //const [count, setCount] = useState(0)
    const handleIncrease = () => handleChange(value + 1) 
    const handleDecrease = () => handleChange(value -1)

    return(
        <div>
            <p>{children}</p>
            <button  onClick={handleIncrease}>+</button>
            <input value={value}/>
            <button onClick={handleDecrease}>-</button>
        </div>
    )
}




const VoyageurModal = () => {
    const[enfant, setEnfant] = useState (0)
    const [adulte, setAdulte] = useState (0)
    const [animal, setAnimal] = useState (0)
    const [bebe, setBebe] = useState(0)
    
    return(
        <>
        <div>
            <button> {`Voyageur ${adulte} , ${enfant}, ${bebe}, ${animal}`} </button>

        </div>
        <Voyageur children={'Adultes 13ans +'} value={adulte} handleChange ={setAdulte}/>
        <Voyageur children={'Enfant + 2ans -13ans'} value={enfant} handleChange ={setEnfant}/>
        <Voyageur children={'Bébé de -2 ans'} value={bebe}  handleChange ={setBebe}/>
        <Voyageur children={'Animal de compagnie'} value={animal}  handleChange ={setAnimal}/>
        </>
    )
}

export default VoyageurModal;
