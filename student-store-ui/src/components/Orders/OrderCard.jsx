import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderCard = ({ order }) => {
  const navigate = useNavigate();

  const goToOrder = (id) => {
    navigate(`/order/${id}`);
  };

  return (
    <div className='w-2/3 flex justify-evenly items-center rounded-lg bg-slate-100 m-4 h-32'>
      <div className='flex justify-around items-center flex-col'>
        <p className='text-2xl font-bold'>Purchased by:</p>
        <p className='text-xl font-medium text-gray-800'>{order.buyerName}</p>
        <p className='text-lg text-gray-600'>{order.email}</p>
      </div>
      <div className='flex justify-around items-center flex-col'>
        <p className='text-xl font-medium'>Items:</p>{' '}
        {order.items.slice(0, 3).map((item, index) => {
          return (
            <div key={index}>
              <p>{`Item Name: ${item.name}. Qty: ${item.qty}`}</p>
            </div>
          );
        })}
        {order.items.length > 3 && <p>...</p>}
      </div>

      <button
        className='bg-green-700 p-3 flex items-center justify-center rounded-md text-white'
        onClick={() => goToOrder(order.id)}
      >
        View purchase details
      </button>
    </div>
  );
};

export default OrderCard;