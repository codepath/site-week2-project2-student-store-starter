import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home';
import ProductView from '../ProductView/ProductView';
import './App.css';
import { useToast } from '@chakra-ui/react';

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

    // if (!cart.has(product.name)) {
    //   // add with 0
    // }

    // const existingProduct = cart.get(product.name);
    //   existingProduct.qty++;
    //   cart.set(product.name, existingProduct);

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
    setCart(new Map(cart));
  };

  const purchase = () => {
    if (cart.size > 0) {
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
        duration: 9000,
        isClosable: true,
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
                  resetQty={resetQty}
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