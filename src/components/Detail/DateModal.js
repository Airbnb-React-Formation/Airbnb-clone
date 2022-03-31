import React, { useRef } from "react"
import CalendarPanel from "../SearchBar/CalendarPanel.js";
import { FieldPanel }  from "../SearchBar/SearchBarField.js";
import useClickOutside from '../../hook/useClickOutside'
import useSearchParamsToObject from '../../hook/useSearchParamsToObject'

const DateModal = ({ calendarProps :{startDate, endDate, setEndDate, setStartDate, selectedField, setSelectedField}}) =>{
     const dateModalRef = useRef() 
     useClickOutside(dateModalRef, ()=>{setSelectedField('')})

    const query = useSearchParamsToObject()
    const {startdate, enddate} = query
    console.log(startdate, enddate)
    return (
    <div  
    ref={dateModalRef} 
    style={{position :'relative'}}>  
        
          <input type="text" name="start date" value={startDate?.format('DD/MM/YY')} onClick={()=>{setSelectedField('startdate')}}/> 
          <input type="text" name="end date" value={endDate?.format('DD/MM/YY')} onClick={()=>{setSelectedField('enddate')}}/> 
        
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