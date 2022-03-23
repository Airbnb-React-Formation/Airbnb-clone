import { useState } from "react";
import Galerie from "./Galerie";
import accommodations from '../../data/accommodations.json';
import ListDetail from "./ListDetail";
import Commentaires from "./Commentaire";
import Avis from "./Avis";


const Detail = () => {
   const item = accommodations[0]
   //const {roomId} = useParms()
   const [startDate, setStartDate] = useState();
   const [endDate, setEndDate] = useState();
   const [selectedField, setSelectedField] = useState('');
   const calendarProps = {startDate, endDate, setEndDate, setStartDate, selectedField, setSelectedField}
  
    return(
        <div>
          <div>
          {item.title}
          <Avis/>
          </div>
          <Galerie item={item}/>
          <ListDetail item={item}
          calendarProps={calendarProps}
          />
          <Commentaires/>
        </div> 
    )
}

export default Detail;