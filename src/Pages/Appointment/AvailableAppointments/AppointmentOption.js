import React from 'react';

const AppointmentOption = ({ appointmentOption }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card text-center shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : "Space"} available</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary text-white">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;