import React, { useEffect, useState } from 'react';
import { Spinner } from '@chakra-ui/react';
import axios from 'axios';

const ProductCard = ({ id, qty }) => {
  const [product, setProduct] = useState();

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://codepath-store-api.herokuapp.com/store/${id}`
      );
      setProduct(response.data.product);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching the data:', error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (!product) {
    return (
      <div className='flex justify-center h-32 bg-gray-100 items-center flex-col gap-8'>
        <Spinner />
        <p>Loading info...</p>
      </div>
    );
  }

  return (
    <div className='flex justify-evenly items-center bg-gray-100 w-2/3 h-32 rounded-lg p-4'>
      <img src={product.image} alt={product.name} className='h-5/6' />
      <div className='flex justify-center items-center flex-col'>
        <p className='font-bold text-2xl'>{product.name}</p>
        <p className='font-medium text-xl'>{product.description}</p>
      </div>
      <div className='flex justify-center items-center flex-col'>
        <p className='text-xl'>
          <span className='font-medium'>Price: </span>
          {product.price}
        </p>
        <p className='text-xl'>
          <span className='font-medium'>Quantity: </span>
          {qty}
        </p>
        <p className='text-xl'>
          <span className='font-medium'>Subtotal: </span>
          {(qty * product.price).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;