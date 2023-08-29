import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderCard from './OrderCard';
import { Input } from '@chakra-ui/react';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [showingOrders, setShowingOrders] = useState([]);
  const [search, setSearch] = useState('');

  const fetchOrders = async () => {
    try {
      const res = await axios.get('http://localhost:3001/purchases');
      console.log(res.data);
      setOrders(res.data);
      setShowingOrders(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleSearch = (event) => {
    const searchText = event.target.value;
    setSearch(searchText);
    if (searchText === '') {
      setShowingOrders(orders);
    } else {
      const filteredOrders = orders.filter((order) =>
        order.email.toLowerCase().includes(searchText.toLowerCase())
      );
      setShowingOrders(filteredOrders);
    }
  };

  return (
    <div className='w-full h-full max-h-screen flex flex-col justify-center items-center text-black p-5'>
      <h1 className='text-5xl font-bold'>Orders</h1>
      <Input
        type='search'
        placeholder='Search'
        w='20%'
        m='10px'
        onChange={handleSearch}
      />
      {showingOrders.map((order) => (
        <OrderCard order={order} key={order.id} />
      ))}
    </div>
  );
};

export default Orders;