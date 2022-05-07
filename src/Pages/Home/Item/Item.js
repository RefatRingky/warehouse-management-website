import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({item}) => {
    const {_id,name,image,description,price,Quantity,sname} = item;
    const navigate = useNavigate();


    const navigateToInventory = id =>{
        navigate(`/item/${id}`);
    }
    return (
        <div className='item-container'> 
            <img src={image} alt='' height='350px' width='400px' />
            <h2>{name}</h2>
            <p>Description:{description}</p>
            <p>price:{price}</p>
            <p>Quantity:{Quantity}</p>
            <p>Supplier Nmae:{sname}</p>
            <button onClick={() => navigateToInventory(_id)} className='btn btn-primary'>Update</button>
        </div>
    );
};

export default Item;