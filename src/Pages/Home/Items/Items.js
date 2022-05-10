import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items,setItems] = useState([]);


    useEffect(()=>{
        fetch('http://localhost:5000/item')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div id='items' className='container'>
         <div className='row'>
         <h1 className='items-title text-center mt-5 text-danger'>Inventory Items</h1>
           <div className='items-container'>
           {
                items.map(item => <Item
                 key={item._id}
                 item={item}
                ></Item>)
            }
           </div>

           <button className='btn btn-danger w-50 mx-auto mt-5  '>Manage Items</button>
         </div>
        </div>
    );
};

export default Items;