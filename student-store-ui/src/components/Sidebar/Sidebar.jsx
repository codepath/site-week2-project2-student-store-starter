import React, { useState, useEffect } from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Input } from '@chakra-ui/react';

const Sidebar = ({
  subtotal,
  tax,
  total,
  cart,
  purchase,
  resetQuantity,
  recentPurchase,
  prevTax,
  prevTotal,
  prevSubtotal,
  handleEmailChange,
  handleNameChange,
}) => {
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
            <Input
              type='email'
              placeholder='exampleperson@meta.com'
              className='p-2 w-[80%] border border-green-800 rounded-lg my-1'
              onChange={handleEmailChange}
            />
            <Input
              type='text'
              placeholder='John Doe'
              className='p-2 w-[80%] border border-green-800 rounded-lg my-1'
              onChange={handleNameChange}
            />
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
                <p>{value.name}</p>
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
              onClick={() => {
                purchase();
                resetQuantity();
              }}
            >
              Purchase now!
            </button>
            {recentPurchase.size > 0 ? (
              <div className='border-t border-black w-full flex flex-col justify-around items-center mt-4'>
                <p className='text-3xl font-bold text-black'>Purchase recipt</p>
                <div className='w-full m-4 flex justify-around items-center border-b border-black text-md font-medium'>
                  <p className='font-semibold'>Name</p>
                  <p className='font-semibold'>Price</p>
                  <p className='font-semibold'>Quantity</p>
                </div>
                {Array.from(recentPurchase.entries()).map(([key, value]) => (
                  <div
                    className='w-full grid grid-cols-3 border-b place-items-center border-black text-md font-medium'
                    key={key}
                  >
                    <p>{value.name}</p>
                    <p>{value.price}</p>
                    <p>{value.qty}</p>
                  </div>
                ))}
                <div>
                  <h2>
                    {' '}
                    <span className='font-semibold'>Subtotal:</span> $
                    {prevSubtotal.toFixed(2)}
                  </h2>
                  <h2>
                    <span className='font-semibold'>Taxes: </span>Tax: $
                    {prevTax.toFixed(2)}
                  </h2>
                  <h2>
                    {' '}
                    <span className='font-semibold'>Total:</span> Total: $
                    {prevTotal.toFixed(2)}
                  </h2>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
