import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const email = user.email;
    console.log(email);
    console.log(user);
    const onSubmit = data => 
  {  
      console.log(data);
      const url =`https://whispering-cove-75294.herokuapp.com/item`;
      fetch(url,{
          method:'POST',
          headers:{
              'content-type': 'application/json'
          },
          body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(result => {
          console.log(result);
      })
    
    };
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Add item</h2>
            <form className='add-item-from d-flex flex-column w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-3' placeholder='sname' type="text" {...register("sname",)} />
                <input className='mb-3' value={email} type="email" readOnly {...register("email")}  />
                <input className='mb-3' placeholder='price' type="number" {...register("price",)} />
                <input className='mb-3' placeholder='quantity' type="number" {...register("Quantity")} />


                <input className='mb-3' placeholder='photo url' type="text" {...register("image",)} />
                <textarea className='mb-3' placeholder='description' {...register("description",)} />
                <input className='add-btn' type="submit" value={'Add inventory'} />
            </form>
            
        </div>
    );
};

export default AddItem;