import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import "./CalendarPanel.css"
import {DateRangePicker} from "react-dates";



const CalendarPanel = ({startDate,endDate,setStartDate,setEndDate,focusedInput,setFocusedInput}) => {
    return(
        <div className="calendar-panel">
            <DateRangePicker
                startDate={startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => {
                    setStartDate(startDate)
                    setEndDate(endDate)
                }} // PropTypes.func.isRequired,
                focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => focusedInput && setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
                keepOpenOnDateSelect
                monthFormat={"MMMM YYYY"}
                noBorder
                // displayFormat={() => moment.localeData('fr').longDateFormat('L')}
                hideKeyboardShortcutsPanel
                transitionDuration={0}
            />
        </div>
    )
}

export default CalendarPanel