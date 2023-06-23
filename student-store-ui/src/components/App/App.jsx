import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home';
import ProductView from '../ProductView/ProductView';
import './App.css';

export default function App() {
  const [cart, setCart] = useState(new Map());
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // const calculateSubtotal = () => {
    //   const sub = cart.reduce(
    //     (accumulator, product) => accumulator + product.price,
    //     0
    //   );
    //   setSubtotal(sub);
    // };
    // const calculateTax = () => {
    //   const taxAmount = subtotal * 0.08;
    //   setTax(taxAmount);
    // };
    // const calculateTotal = () => {
    //   const totalAmount = subtotal + tax;
    //   setTotal(totalAmount);
    // };
    // calculateSubtotal();
    // calculateTax();
    // calculateTotal();
  }, [cart]);

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
    console.log(cart);
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
    }
    console.log(cart);
    setCart(new Map(cart));
  };

  return (
    <div className='app'>
      <BrowserRouter>
        <Sidebar tax={tax} subtotal={subtotal} total={total} cart={cart} />
        <main className='main-content'>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={
                <Home removeFromCart={removeFromCart} addToCart={addToCart} />
              }
            />
            <Route path='/product/:id' element={<ProductView />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}