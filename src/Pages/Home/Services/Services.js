import React from 'react';
import Service from '../Service/Service';

import service1 from '../../../images/service/service1.jpg'
import service2 from '../../../images/service/service2.jpg'
import service3 from '../../../images/service/service3.jpg'


const services =[
    {id:1,name:'Baby Boy dress',img:service1},
    {id:2,name:'Baby Boy dress',img:service2},
    {id:3,name:'Baby Boy dress',img:service3}
]

const Services = () => {
    return (
        <div id='services' className='container'>
            <h2 className='text-danger text-center'>This is services</h2>
            <div className='row'>
                 {
                      services.map(service => <Service
                       key={service.id}
                       service={service}
                     ></Service>)
                 }
            </div>
        </div>
    );
};

export default Services;