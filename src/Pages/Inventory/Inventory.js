import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Inventory = () => {
    const {itemId} = useParams();
    const [item,setItem] = useState({});
    const [refresh, setRefresh] = useState(0);

    useEffect(()=>{
        const url = `https://whispering-cove-75294.herokuapp.com/item/${itemId}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setItem(data))
    },[refresh]);

    const handleDelevered = () => {
        const procced = window.confirm('Are you sure?');

        if (procced) {
            const name = item.name;
            const sname = item.sname;
            const price = item.price;
            const Quantity = item.Quantity - 1;
            const description = item.description;
            const image = item.image;

            const updatedItem = { name, sname, price, Quantity, description, image };

            fetch(`https://whispering-cove-75294.herokuapp.com/item/${item._id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(updatedItem),
            })
                .then((response) => response.json())
                .then((json) => console.log(json));

            setRefresh(refresh + 1)
            toast.success('Delivery success')
        }
    }
    // restock
    const handleRestock = (e) => {
      
         const q = e.target.number.value;

        const name = item.name;
        const sname = item.sname;
        const price = item.price;
        const Quantity = parseInt(item.Quantity) + parseInt(q);
        const description = item.description;
        const image = item.image;

        const updatedItem = { name, sname, price, Quantity, description, image };

        fetch(`https://whispering-cove-75294.herokuapp.com/item/${item._id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

        setRefresh(refresh + 1)
        toast.success('Delivery success')
    }
    return (
        <div className='item-container'> 
            <img src={item.image} alt='' height='300px' width='350px' />
            <h2>{item.name}</h2>
            <p>Description:{item.description}</p>
            <p>price:{item.price}</p>
            <p>Quantity:{item.Quantity}</p>
            <p>Supplier Nmae:{item.sname}</p>
            <button onClick={ handleDelevered} className='btn btn-danger'>Deliver</button>
            <form onSubmit={handleRestock} >
                <input type='number' name='number' />
                <input type='submit' value= 'Restock'/>
            </form>
        </div>
    );
};

export default Inventory;