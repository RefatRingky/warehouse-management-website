import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
       <footer>
           
           <div className='container mt-5'>
               <div className='row d-flex '>
               <div className='col-md-6 mt-3 '>
               <h4>Our services</h4>
               <p>Women Collection</p>
               <p>Gents Collection</p>
               <p>Baby Collection</p>
               </div>
               <div className='col-md-6 mt-3'>
                   <h4>Our Address</h4>
                   <p>78/6 solimullah road,Mohammodpur,Dhaka</p>
               </div>
               </div>
               <p className='text-center'>Copywrite @ by Refat Tamanna Ringky</p>
           </div>
       </footer>
    );
};

export default Footer;