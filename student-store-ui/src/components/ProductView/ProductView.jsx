import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductView = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://codepath-store-api.herokuapp.com/store/${id}`
      );
      setProduct(response.data.product);
      console.log(response.data.product, 'hola');
    } catch (error) {
      console.error('Error fetching the data:', error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (!product) {
    // Render a loading state or return null
    return <p>Loading...</p>;
  }

  return (
    <div className='w-full h-full max-h-screen max-w-screen flex flex-col items-center'>
      <div className='w-2/3 m-6 bg-gray-200 rounded-md p-8 flex justify-center items-center flex-col overflow-hidden gap-3'>
        <p className='text-3xl font-bold'>{product?.name}</p>
        <img
          src={product?.image}
          alt={product?.name}
          className='h-80 rounded-md'
        />
        <div className='w-[80%] flex flex-col'>
          <p className='text-lg font-semibold'>
            Description{': '}
            <span className='text-lg font-medium text-gray-700'>
              {product?.description}
            </span>
          </p>
          <p className='font-semibold text-lg'>
            Precio{': '}
            <span className='text-green-700 text-lg'>${product?.price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductView;