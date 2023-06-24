import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home';
import ProductView from '../Productview/ProductView';
import './App.css';
import { useToast } from '@chakra-ui/react';

export default function App() {
  const [cart, setCart] = useState(new Map());
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const toast = useToast();

  useEffect(() => {
    const calculateTotal = () => {
      const totalAmount = subtotal + tax;
      setTotal(totalAmount);
    };
    calculateTotal();
  }, [cart]);

  const scrollToSection = () => {
    scroller.scrollTo('sectionId', {
      duration: 500, // Scroll duration in milliseconds
      smooth: 'easeInOutQuart', // Scroll animation easing
    });
  };

  const addToCart = (product) => {
    if (cart.has(product.name)) {
      const existingProduct = cart.get(product.name);
      existingProduct.qty++;
      cart.set(product.name, existingProduct);
    } else {
      const newProduct = {
        price: product.price,
        qty: 1,
      };
      cart.set(product.name, newProduct);
    }
    setSubtotal(subtotal + product.price);
    setTax(tax + product.price * 0.08);
    setCart(new Map(cart));
  };

  const removeFromCart = (product) => {
    if (cart.has(product.name)) {
      const existingProduct = cart.get(product.name);
      if (existingProduct.qty === 1) {
        cart.delete(product.name);
      } else {
        existingProduct.qty--;
        cart.set(product.name, existingProduct);
      }
      setSubtotal(subtotal - product.price);
      setTax(tax - product.price * 0.08);
    }
    console.log(cart);
    setCart(new Map(cart));
  };

  const purchase = () => {
    setCart(new Map());
    setTax(0);
    setSubtotal(0);
    toast({
      title: 'Purchase completed',
      description: 'The items will be sent to your address',
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
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
                  scrollToSection={scrollToSection}
                />
              }
            />
            <Route path='/product/:id' element={<ProductView />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}