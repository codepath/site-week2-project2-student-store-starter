import React from 'react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const CardItem = ({ props, goToProduct, addToCart, removeFromCart }) => {
  return (
    <div
      id={props.id}
      className='h-[400px] bg-gray-100 duration-200 hover:bg-slate-200 flex flex-col justify-center p-2 rounded-lg gap-2 relative cursor-pointer'
    >
      <div className='w-full h-1/2 flex justify-center items-start'>
        <img
          src={props.image}
          alt={props.name}
          className='object-cover rounded-md'
          style={{ maxHeight: '100%', width: 'auto' }}
          onClick={() => goToProduct(props.id)}
        />
      </div>
      <p
        className='text-xl font-medium hover:underline'
        onClick={() => goToProduct(props.id)}
      >
        {props.name}
      </p>
      <p className='text-lg font-semibold text-green-700'>${props.price}</p>
      <div className='absolute bottom-2 right-2 flex gap-2'>
        <button
          className={
            'p-2 bg-green-500 text-white rounded-lg flex justify-center items-center'
          }
          onClick={() => addToCart(props)}
        >
          <AddIcon />
        </button>

        <button
          className='p-2 bg-green-500 text-white rounded-lg flex justify-center items-center'
          onClick={() => removeFromCart(props)}
        >
          <MinusIcon />
        </button>
      </div>
    </div>
  );
};

export default CardItem;