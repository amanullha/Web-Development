import React from 'react';

import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import SingleService from '../singleService/SingleService';



const Services = () => {



    const services = [
        {
            _id: 1,
            name: 'Fluorid Treatment',
            description: "",
            img: fluoride
        },
        {
            _id: 1,
            name: 'Cavity Filling',
            description: "",
            img: cavity
        },
        {
            _id: 1,
            name: 'Teeth Whitening',
            description: "",
            img: whitening
        }
    ]









    return (
        <div className='my-16'>

            <div class="divider text-2xl font-bold uppercase text-center text-primary">Our Services</div>
            <h1 className='text-center'>Services We Provide</h1>

            <div className=' grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-16 '>
                {
                    services.map(service => <SingleService

                        key={service._id}
                        service={service}
                    />)
                }
            </div>


        </div>
    );
};

export default Services;