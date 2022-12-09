import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import bg from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <div className="hero" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content my-10 flex-col lg:flex-row-reverse">
                <figure className='md:w-1/2 w-full'>
                    <img src={chair} className="w-full rounded-lg shadow-2xl" alt='' />
                </figure>
                <div className='md:w-1/2 w-full'>
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    ></DayPicker>
                    <p>You have selected date: {format(selectedDate, "PP")}</p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;