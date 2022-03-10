import React from "react"
import CalendarPanel from "../SearchBar/CalendarPanel.js";
import { FieldPanel }  from "../SearchBar/SearchBarField.js";



const DateModal = ({startDate, endDate, setEndDate, setStartDate, selectedField, setSelectedField}) =>{
     

    return (
    <div>
        
    <FieldPanel>
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