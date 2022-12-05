import React from 'react';
import treatment from '../../../../assets/images/treatment.png';

const Featured = () => {
    return (
        <div className="my-40">
            <div className="hero-content my-20 flex-col lg:flex-row-reverse">
                <div lassName="md:w-1/2 w-full">
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
                <div className="w-full md:w-full">
                    <img src={treatment} className="md:w-1/2 mx-auto w-full rounded-lg shadow-2xl" alt='' />
                </div>
            </div>
        </div>
    );
};

export default Featured;