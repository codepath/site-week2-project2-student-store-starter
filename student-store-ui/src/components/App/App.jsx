import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home';
import ProductView from '../ProductView/ProductView';
import './App.css';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import Orders from '../Orders/Orders';
import SingleOrder from '../SingleOrder/SingleOrder';

export default function App() {
  const [cart, setCart] = useState(new Map());
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [resetQty, setResetQty] = useState(false);
  const [prevTax, setPrevTax] = useState(0);
  const [prevTotal, setPrevTotal] = useState(0);
  const [prevSubtotal, setPrevSubtotal] = useState(0);
  const [recentPurchase, setRecentPurchase] = useState(new Map());
  const [email, setEmail] = useState('');
  const [buyerName, setBuyerName] = useState('');
  const toast = useToast();

  useEffect(() => {
    const calculateTotal = () => {
      const totalAmount = subtotal + tax;
      setTotal(totalAmount);
    };
    calculateTotal();
  }, [cart]);

  const resetQuantity = () => {
    setResetQty(true);
  };

  useEffect(() => {
    if (resetQty) {
      setCart(new Map());
      setTax(0);
      setSubtotal(0);
      setResetQty(false);
    }
  }, [resetQty]);

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  const handleNameChange = (event) => {
    const name = event.target.value;
    setBuyerName(name);
  };

  const addToCart = (product) => {
    if (!cart.has(product.id)) {
      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        qty: 0,
      };
      cart.set(product.id, newProduct);
    }

    const existingProduct = cart.get(product.id);
    existingProduct.qty++;
    cart.set(product.id, existingProduct);

    setSubtotal(subtotal + product.price);
    setTax(tax + product.price * 0.08);
    setCart(new Map(cart));
  };

  const removeFromCart = (product) => {
    if (cart.has(product.id)) {
      const existingProduct = cart.get(product.id);
      if (existingProduct.qty === 1) {
        cart.delete(product.id);
      } else {
        existingProduct.qty--;
        cart.set(product.id, existingProduct);
      }
      setSubtotal(subtotal - product.price);
      setTax(tax - product.price * 0.08);
    }
    setCart(new Map(cart));
  };

  const purchase = () => {
    if (cart.size > 0) {
      const itemsArray = Array.from(cart.values());
      const purchaseData = {
        email: email,
        buyerName: buyerName,
        date: Date.now(),
        items: itemsArray,
        subtotal: subtotal,
        tax: tax,
        total: total,
      };
      axios
        .post('http://localhost:3001/purchases', purchaseData)
        .then((response) => {
          console.log(response);
          setPrevTax(tax);
          setPrevTotal(total);
          setPrevSubtotal(subtotal);
          setRecentPurchase(cart);
          setCart(new Map());
          setTax(0);
          setSubtotal(0);
          toast({
            title: 'Purchase completed',
            description: 'The items will be sent to your address',
            status: 'success',
            duration: 6000,
            isClosable: true,
          });
        })
        .catch((error) => {
          toast({
            title: `There was an error`,
            description: `Check your inputs and try again`,
            status: `error`,
            duration: 6000,
            isClosable: true,
          });
        });
    } else {
      toast({
        title: `You haven't add nothing to the cart yet`,
        description: `Make sure you have selected your products before puchasing`,
        status: `error`,
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div className='app'>
      <BrowserRouter>
        <Sidebar
          tax={tax}
          subtotal={subtotal}
          total={total}
          cart={cart}
          purchase={purchase}
          resetQuantity={resetQuantity}
          recentPurchase={recentPurchase}
          prevTax={prevTax}
          prevTotal={prevTotal}
          prevSubtotal={prevSubtotal}
          handleEmailChange={handleEmailChange}
          handleNameChange={handleNameChange}
        />
        <main className='main-content'>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={
                <Home
                  removeFromCart={removeFromCart}
                  addToCart={addToCart}
                  resetQty={resetQty}
                />
              }
            />
            <Route path='/product/:id' element={<ProductView />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/order/:id' element={<SingleOrder />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}