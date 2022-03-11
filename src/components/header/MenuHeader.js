import {useState} from "react";

const menuElementName = ["Hébergement", "Expérience","Expérience en ligne"]


function MenuHeaderElement({text, selectElement ,i ,handleChangeSelect}){
    const elementClassName = (selectElement === i) ? "MenuHeader__tab__element selected" : "MenuHeader__tab__element ";
    return (
    <div className="MenuHeader__tab" >
        <button className={elementClassName} onClick={() => handleChangeSelect(i)}>
            <span>{text}</span>
        </button>
    </div>
    )
}

function MenuHeader({listMenuElement = menuElementName}){
    const [selectElement, setSelectElement] = useState(0)
    const handleChangeSelect = (i) => {setSelectElement(i)}
    const listMenuElementHtml =  listMenuElement.map((element, i) => {
        return <MenuHeaderElement key={i} text={element} selectElement={selectElement} i={i} handleChangeSelect={handleChangeSelect}/>
    }
        )
    return(
        <div className="MenuHeader__container">
            {listMenuElementHtml}
        </div>
    )
}
export default MenuHeader;