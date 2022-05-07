import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {
    const {itemId} = useParams();
    // const [item] = useItemDetails(id)
    return (
        <div >
            <h2>Welcome to the inventory:{itemId}</h2>
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