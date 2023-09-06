import React from 'react'
import Productcard from './Productcard'

const Products = ({data}) => {
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
        <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>Shopping Everyday</h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p className='max-w-[700px] text-gray-600 text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eos eveniet perspiciatis quaerat quidem mollitia reprehenderit repellendus consequatur! Animi voluptatum sapiente tempora saepe laboriosam quam delectus molestiae beatae, maiores ducimus.
        </p>
     </div>
     <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
        {
           data.data && data.data.map((item)=>(
            <Productcard key={item._id} data={item}/>
          ))
        }
     </div>
</div>
  )
}

export default Products