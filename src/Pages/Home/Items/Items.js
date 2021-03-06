import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../Item/Item';
import './Items.css';
import Loading from '../../Shared/Loading/Loading'

const Items = () => {
    const [items,setItems] = useState([]);
    const navigate = useNavigate();


    useEffect(()=>{
        fetch('https://whispering-cove-75294.herokuapp.com/item')
        .then(res => res.json())
        .then(data => setItems(data))
    },[]);

    return (
        <div id='items' className='container'>
         <div className='row'>
         <h1 style={{color:'coral'}} className='items-title text-center mt-5 '>Inventory Items</h1>
           <div className='items-container'>
           {     
                items.length ?
                items.slice(0,6).map(item => <Item
                 key={item._id}
                 item={item}
                ></Item>)
                :
                <Loading></Loading>
            }
           </div>

           <button onClick={() => navigate('/product')} style={{background:'coral'}} className=' mt-5 w-50 mx-auto '>Manage Items</button>
         </div>
        </div>
    );
};

export default Items;