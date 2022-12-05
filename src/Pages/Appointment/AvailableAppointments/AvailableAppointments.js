import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <section className='w-10/12 mx-auto my-10'>
            <h3 className='text-xl text-center  text-primary font-bold'>Available Appointments on {format(selectedDate, "PP")}</h3>
            <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10">
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                    ></AppointmentOption>)
                }
            </div>
        </section>
    );
};

export default AvailableAppointments;