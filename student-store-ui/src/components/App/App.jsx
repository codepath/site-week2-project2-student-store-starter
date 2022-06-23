/* eslint-disable no-console */
import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home';
import ProductDetail from '../ProductDetail/ProductDetail';
import NotFound from '../NotFound/NotFound';
import { sampleBody } from '../../constants';
import './App.css';

export default function App() {
  // **********************************************************************
  // CONSTANTS
  // **********************************************************************

  const URL = 'https://codepath-store-api.herokuapp.com/store';

  // **********************************************************************
  // STATE VARIABLES AND FUNCTIONS
  // **********************************************************************

  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState({ name: '', value: '' });

  // **********************************************************************
  // AXIOS GET AND POST FUNCTIONS
  // **********************************************************************

  async function fetchAllProductData() {
    setIsFetching(true);
    try {
      const { data } = await axios(URL);
      console.log('productData ', data);
      setProducts(data.products);
      setError('');
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setIsFetching(false);
    }
  }

  async function sendPostRequest(body) {
    setIsFetching(true);
    try {
      const resp = await axios.post(URL, body);
      console.log(resp.data);
      setError('');
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setIsFetching(false);
    }
  }

  // **********************************************************************
  // HANDLER FUNCTIONS (5)
  // **********************************************************************

  // toggles sidebar
  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleAddItemToCart = (productId) => {
    const productIndex = shoppingCart.findIndex((product) => product.itemId === productId);
    // if productId doesn't exist in shoppingCart, add it as a new product
    if (productIndex === -1) {
      setShoppingCart([...shoppingCart, {
        itemId: productId,
        quantity: 1,
      }]);
    // if productId is in shoppingCart, increment its quantity by 1
    } else {
      shoppingCart[productIndex].quantity += 1;
      setShoppingCart([...shoppingCart]);
    }
  };

  const handleRemoveItemFromCart = (productId) => {
    const productIndex = shoppingCart.findIndex((product) => product.itemId === productId);
    // if product is in cart
    if (productIndex !== -1) {
      const { quantity } = shoppingCart[productIndex];
      // if only 1 left of product, remove from shoppingCart entirely
      if (quantity === 1) {
        shoppingCart.splice(productIndex, 1);
        setShoppingCart([...shoppingCart]);
      } else {
        shoppingCart[productIndex].quantity -= 1;
        setShoppingCart([...shoppingCart]);
      }
    }
  };

  const handleOnCheckoutFormChange = (name, value) => {
    checkoutForm[name] = value;
    setCheckoutForm(checkoutForm);
  };

  const handleOnSubmitCheckoutForm = () => {
    sendPostRequest(sampleBody);
  };

  // **********************************************************************
  // FETCH DATA ON PAGE LOAD
  // **********************************************************************

  useEffect(() => {
    fetchAllProductData();
  }, []);

  // **********************************************************************
  // PAGE RENDERING
  // **********************************************************************
  return (
    <div className="app">
      <main>
        <Navbar />
        <Sidebar
          isOpen={isOpen}
          products={products}
          shoppingCart={shoppingCart}
          checkoutForm={checkoutForm}
          handleOnToggle={handleOnToggle}
          handleOnCheckoutFormChange={handleOnCheckoutFormChange}
          handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
        />
        <Routes>
          <Route
            path="/"
            element={(
              <Home
                products={products}
                shoppingCart={shoppingCart}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
              />
)}
          />
          <Route
            path="/products/:productId"
            element={(
              <ProductDetail
                shoppingCart={shoppingCart}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
                isFetching={isFetching}
                setIsFetching={setIsFetching}
                error={error}
                setError={setError}
              />
)}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <footer>
          Footer
        </footer>
      </main>
    </div>
  );
}
