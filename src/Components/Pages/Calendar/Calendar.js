import React, {useState} from 'react';
import Calendar from 'react-calendar';
import "../../../App.css"
const Calendars = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className='flex justify-center items-center height'>
            <Calendar onChange={onChange} value={value} />
        </div>
    );
};

export default Calendars;
