import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import axios from 'axios';
import ProductCard from './ProductCard';

const SingleOrder = () => {
  const [order, setOrder] = useState();
  const { id } = useParams();

  const fetchOrder = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/purchases/${id}`);
      // I can improve it with promise.all
      setOrder(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching the data:', error);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  if (!order) {
    return (
      <div className='flex justify-center h-96 items-center flex-col gap-8'>
        <Spinner />
        <p>Loading info...</p>
      </div>
    );
  }

  return (
    <div className='w-full h-full max-h-screen max-w-screen flex flex-col items-center p-4 gap-4'>
      <p className='text-3xl font-bold'>Order by {order.email}</p>
      {order.items.map((item) => (
        <ProductCard id={item.id} qty={item.qty} key={item.id} />
      ))}
      <p className='text-xl'>
        <span className='font-semibold'>Tax: </span>
        {order.tax.toFixed(2)}
      </p>
      <p className='text-xl'>
        <span className='font-semibold'>Subtotal: </span>
        {order.subtotal.toFixed(2)}
      </p>
      <p className='text-xl'>
        <span className='font-semibold'>Total: </span>
        {order.total.toFixed(2)}
      </p>
    </div>
  );
};

export default SingleOrder;