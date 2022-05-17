import React from 'react';
import Feature from '../../Feature/Feature';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Services from '../Services/Services'


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Items></Items>
          <Services></Services>
          <Feature></Feature>
      
         
        
        </div>
    );
};

export default Home;