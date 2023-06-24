import React, { useState, useEffect } from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const Sidebar = ({ subtotal, tax, total, cart, purchase }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`sidebar fixed left-0 h-full z-50 bg-black transition-all flex flex-col item-center ${
        isOpen ? 'w-96' : 'w-20'
      }`}
    >
      <div className='w-full h-20 flex justify-start'>
        <button
          className={`toggle-button bg-black text-white py-2 px-4 rounded mb-4 duration-200`}
          onClick={toggleSidebar}
        >
          <ArrowForwardIcon
            className={`${isOpen ? 'duration-200 rotate-180' : 'duration-200'}`}
          />
        </button>
      </div>
      <div className='sidebar-content'>
        {isOpen ? (
          <div className='w-5/ bg-white rounded-md m-4 p-4 flex flex-col justify-center items-center'>
            <div className='w-full m-4 flex justify-around items-center border-b border-black text-md font-medium'>
              <p className='font-semibold'>Name</p>
              <p className='font-semibold'>Price</p>
              <p className='font-semibold'>Quantity</p>
            </div>
            {Array.from(cart.entries()).map(([key, value]) => (
              <div
                className='w-full grid grid-cols-3 border-b place-items-center border-black text-md font-medium'
                key={key}
              >
                <p>{key}</p>
                <p>{value.price}</p>
                <p>{value.qty}</p>
              </div>
            ))}
            <div>
              <h2>
                {' '}
                <span className='font-semibold'>Subtotal:</span> $
                {subtotal.toFixed(2)}
              </h2>
              <h2>
                <span className='font-semibold'>Taxes: </span>Tax: $
                {tax.toFixed(2)}
              </h2>
              <h2>
                {' '}
                <span className='font-semibold'>Total:</span> Total: $
                {total.toFixed(2)}
              </h2>
            </div>
            <button
              className='bg-black text-white font-bold mt-4 p-2 rounded-md'
              onClick={() => purchase()}
            >
              Purchase now!
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;