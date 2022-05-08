import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='w-50 mx-auto'>
            <h2>Add item</h2>
            <form className='add-item-from d-flex flex-column w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-3' placeholder='supplier name' type="text" {...register("supplier name",)} />
                <input className='mb-3' placeholder='email' type="email" {...register("email")}  />
                <input className='mb-3' placeholder='price' type="number" {...register("price",)} />
                <input className='mb-3' placeholder='quantity' type="number" {...register("quantity")} />


                <input className='mb-3' placeholder='photo url' type="text" {...register("img",)} />
                <textarea className='mb-3' placeholder='description' {...register("desc",)} />
                <input className='add-btn' type="submit" value={'Add inventory'} />
            </form>
            
        </div>
    );
};

export default AddItem;