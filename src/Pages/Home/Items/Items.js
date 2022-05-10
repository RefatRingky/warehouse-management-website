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
         <h1 style={{color:'coral'}} className='items-title text-center mt-5 '>Inventory Items</h1>
           <div className='items-container'>
           {
                items.map(item => <Item
                 key={item._id}
                 item={item}
                ></Item>)
            }
           </div>

           <button style={{background:'coral'}} className=' mt-5 w-50 mx-auto '>Manage Items</button>
         </div>
        </div>
    );
};

export default Items;