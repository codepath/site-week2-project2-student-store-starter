import React, { useState, useEffect } from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const Sidebar = ({ subtotal, tax, total, cart }) => {
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
            {Array.from(cart.entries()).map(([key, value]) => (
              <div
                className='w-full m-4 flex justify-around items-center border-b border-black text-md font-medium'
                key={key}
              >
                <p>{key}</p>
                <p>{value.price}</p>
                <p>{value.qty}</p>
              </div>
            ))}
            <div>
              <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
              <h2>Tax: ${tax.toFixed(2)}</h2>
              <h2>Total: ${total.toFixed(2)}</h2>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;