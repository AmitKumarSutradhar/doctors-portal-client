import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: "Wilson Henry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1,
            location: "Californai"
        },
        {
            _id: 2,
            name: "Wilson Henry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2,
            location: "Californai"
        },
        {
            _id: 3,
            name: "Wilson Henry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3,
            location: "Californai"
        },
    ]

    return (
        <section>
            <div className="flex justify-between">
                <div className="">
                    <h3 className='text-xl  text-primary uppercase font-bold'>TESTIMONIAL</h3>
                    <h1 className="text-3xl my-3">What Our Patients Says</h1>
                </div>
                <div className="md:w-48 w-24">
                    <img src={quote} alt="" />
                </div>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    reviews.map(testimonial => <Review
                        key={testimonial._id}
                        testimonial={testimonial}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;