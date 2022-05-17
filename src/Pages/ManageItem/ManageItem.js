import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';

const ManageItem = () => {
    const navigate =useNavigate()
    const [items,setItems] = useItems();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you want to delete?');
        if(proceed){
            const url = `https://whispering-cove-75294.herokuapp.com/item/${id}`
              fetch(url, {
                  method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  const remaining = items.filter(item => item._id !== id);
                  setItems(remaining);
              })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Manage Item:</h2>
            {
                items.map(item => <div key={item._id} >

                 <h4>{item.name} <button onClick={() => handleDelete(item._id)} className='btn btn-danger'>Delete</button> <button onClick={() => handleDelete(item._id)} className='btn btn-danger'>Update</button></h4>

                
                 
                </div> )
                
            }
            <div className='text-center'><button onClick={() => navigate('/additem')} className='btn btn-danger w-50 mx-auto'>Add item</button></div>
        </div>
    );
};

export default ManageItem;