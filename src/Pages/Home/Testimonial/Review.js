import React from 'react';

const Review = ({ testimonial }) => {
    const { name, review, img, location } = testimonial;
    return (
        <div className="card shadow-xl p-5">
            <div className="card-body">
                <p>{review}</p>
            </div>
            <div className=" flex items-center">
                <div className="avatar w-20 mx-5">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </div>
                </div>
                <div className="">
                    <h2 className="card-title">{name}</h2>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;