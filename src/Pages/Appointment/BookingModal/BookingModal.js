import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, "PP");

    const handlebooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;


        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone,

        }

        console.log(booking);
        setTreatment(null);
    }
    return (
        <>
            {/* The button to open modal */}
            {/* <label htmlFor="booking-modal" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handlebooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" value={date} className="input w-full input-bordered" readOnly />
                        <select name='slot' className="select select-bordered w-full" >
                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot}>
                                    {slot}
                                </option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your name" className="input w-full input-bordered" />
                        <input name='email' type="text" placeholder="Your email address" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone" className="input w-full input-bordered" />
                        <input type="submit" className="btn btn-accent w-full" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;