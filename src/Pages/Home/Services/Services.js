import React from 'react';
import Service from '../Service/Service';

import service1 from '../../../images/service/service1.jpg'
import service2 from '../../../images/service/service2.jpg'
import service3 from '../../../images/service/service3.jpg'
import service4 from '../../../images/service/service1.jpg'
import service5 from '../../../images/service/service2.jpg'
import service6 from '../../../images/service/service3.jpg'


const services =[
    {id:1,name:'Baby Boy dress',img:service1},
    {id:2,name:'Baby Boy dress',img:service2},
    {id:3,name:'Baby Boy dress',img:service3},
    {id:4,name:'Baby Boy dress',img:service4},
    {id:5,name:'Baby Boy dress',img:service5},
    {id:6,name:'Baby Boy dress',img:service6}
]

const Services = () => {
    return (
        <div id='services' className='container mt-5'>
            <h2 className='text-danger text-center mt-5'>This is services</h2>
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