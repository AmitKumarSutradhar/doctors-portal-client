import React from 'react';
import flouride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';
import Featured from './Featured/Featured';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: "Flouride Treatment",
            description: "ipsum dolor sit amet consectetur adipisicing elit. Natus quas consectetur a, rerum dolorum illum.",
            img: flouride

        },
        {
            id: 2,
            name: "Cavity Filling",
            description: "ipsum dolor sit amet consectetur adipisicing elit. Natus quas consectetur a, rerum dolorum illum.",
            img: cavity

        },
        {
            id: 3,
            name: "Teeth Whitening",
            description: "ipsum dolor sit amet consectetur adipisicing elit. Natus quas consectetur a, rerum dolorum illum.",
            img: whitening

        },
    ]
    return (
        <div className="mt-16">
            <div className='text-center'>
                <h3 className='text-xl  text-primary uppercase font-bold'>Our  Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className="">
                <Featured></Featured>
            </div>
        </div>

    );
};

export default Services;