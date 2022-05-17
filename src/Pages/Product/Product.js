import React from 'react';
import Items from '../Home/Items/Items';
import banner1 from '../../images/banner/banner1.jpg'


const Product = () => {
    return (
        <div>
            <img src={banner1} alt='' width='1348px'/>
            <Items></Items>
        </div>
    );
};

export default Product;