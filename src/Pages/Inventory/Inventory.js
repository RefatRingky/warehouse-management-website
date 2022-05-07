import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {
    const {itemId} = useParams();
    const [item,setItem] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/item/${itemId}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setItem(data))
    },[])
    
    // const [item] = useItemDetails(id)
    return (
        <div >
            <h2>Welcome to the inventory:{itemId.name}</h2>
            <div className='text-center'>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Delivery</button><br></br><br></br>
                <input type="number" id="quantity" name="quantity" min="1" max="5"></input><br></br><br></br>
                <button className='btn btn-primary'>Restock</button>

            </Link>
            </div>
        </div>
    );
};

export default Inventory;