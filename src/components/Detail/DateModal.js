import React, { useRef } from "react"
import CalendarPanel from "../SearchBar/CalendarPanel.js";
import useClickOutside from '../../hook/useClickOutside'
import {FieldPanel} from "../SearchBar/FieldPanel";


const DateModal = ({calendarProps :{startDate, endDate, setEndDate, setStartDate, selectedField, setSelectedField}}) =>{
     const dateModalRef = useRef() 
     useClickOutside(dateModalRef, ()=>{setSelectedField('')})
    return (
    <div  
    ref={dateModalRef} 
    style={{position :'relative'}}>  
        
          <input type="text" name="start date" value={startDate?.format('DD/MM/YY')} onClick={()=>{setSelectedField('startDate')}}/> 
          <input type="text" name="end date" value={endDate?.format('DD/MM/YY')} onClick={()=>{setSelectedField('endDate')}}/> 
        
   <FieldPanel align = 'right' isSelected={selectedField} >    
    <CalendarPanel
     startDate={startDate}
     setStartDate={setStartDate}
     endDate={endDate}
     setEndDate={setEndDate}
     focusedInput={selectedField}
     setFocusedInput={setSelectedField}
    />
   </FieldPanel>
   
</div> )
}

export default DateModal;