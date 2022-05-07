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
                <button className='btn btn-primary'>Delivery</button>
            </Link>
            </div>
        </div>
    );
};

export default Inventory;