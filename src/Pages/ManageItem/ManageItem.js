import React from 'react';
import useItems from '../../hooks/useItems';

const ManageItem = () => {
    const [items] = useItems();
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage Item</h2>
            {
                items.map(item => <div key={item._id}>
                 <h6>{item.name} <button>Delete</button></h6>

                </div>)
            }
        </div>
    );
};

export default ManageItem;