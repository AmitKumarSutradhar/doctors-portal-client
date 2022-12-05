import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointmentBg from '../../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <section className='w-full text-white rounded-lg' style={{ background: `url(${appointmentBg})` }}>
            <div className="hero-content flex-col lg:flex-row my-20 pb-0">
                <img src={doctor} className="lg:w-1/2 w-full  rounded-lg shadow-2xl -mt-32" alt='' />
                <div className='lg:w-1/2 w-full sm:m-3'>
                    <h3 className='text-xl  text-primary uppercase font-bold'>Appointment</h3>
                    <h1 className="text-5xl font-bold my-3">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English.Many desktop publishing packages and web page.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Appoinment</button>
                </div>
            </div>

        </section>
    );
};

export default MakeAppointment;