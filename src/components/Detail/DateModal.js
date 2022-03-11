import React from "react"
import CalendarPanel from "../SearchBar/CalendarPanel.js";
//import { FieldPanel }  from "../SearchBar/SearchBarField.js";



const DateModal = ({startDate, endDate, setEndDate, setStartDate, selectedField, setSelectedField}) =>{
     
    return (
    <div>  
        <div >
          <input type="text" name="start date" value={startDate}/> 
          <input type="text" name="end date" value={endDate}/> 
        </div>
   {/*<FieldPanel> */}     
    <CalendarPanel
     startDate={startDate}
     setStartDate={setStartDate}
     endDate={endDate}
     setEndDate={setEndDate}
     focusedInput={selectedField}
     setFocusedInput={setSelectedField}
             />
   {/*</FieldPanel>*/}
</div> )
}

export default DateModal;