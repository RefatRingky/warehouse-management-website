
import React from 'react';

import service1 from '../../images/service/service1.jpg'

const Feature = () => {
    return (
        
        <div className='container'>
               <h3 className='text-center mt-5 text-danger'>Contact Us</h3>
         
            <div className='d-flex'>
            <div className='col-md-6'>
                <img src={service1} alt='' width={'400px'} height={'300px'} />
            </div>
            <div className='col-md-6 mt-5 flex-column'>
                
                <form className='add-item-from d-flex flex-column w-50 mx-auto'>
                <input className='mb-3' placeholder='name' />
               
                <input className='mb-3' placeholder='email' type="email"   />
                
                <textarea className='mb-3' placeholder='description'  />
                <input className='add-btn' type="submit" value={'Submit'} />
            </form>
            </div>
            </div>
        </div>
    );
};

export default Feature;