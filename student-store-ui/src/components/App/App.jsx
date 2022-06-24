/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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
  const [checkoutForm, setCheckoutForm] = useState({ name: '', email: '' });
  const [category, setCategory] = useState('all');
  const [activeQuery, setActiveQuery] = useState('');
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

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
    if (purchaseCompleted && !isOpen) {
      setPurchaseCompleted(false);
    }
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
    const newCheckoutForm = { ...checkoutForm };
    newCheckoutForm[name] = value;
    setError('');
    setCheckoutForm(newCheckoutForm);
  };

  const handleOnSubmitCheckoutForm = () => {
    if (shoppingCart.length === 0) {
      setError('empty cart');
      return 400;
    }
    if (checkoutForm.email === '') {
      setError('empty email');
      return 400;
    }
    if (checkoutForm.name === '') {
      setError('empty name');
      return 400;
    }

    try {
      const checkoutRequestObj = {
        user: checkoutForm,
        shoppingCart,
      };
      sendPostRequest(checkoutRequestObj);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setShoppingCart([]);
      setCheckoutForm({ name: '', email: '' });
      setPurchaseCompleted(true);
    }
    return 200;
  };

  const handleSearch = (queryString) => {
    setActiveQuery(queryString.toLowerCase());
  };

  const handleCategoryChange = (categoryString) => {
    setCategory(categoryString);
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
        <Sidebar
          isOpen={isOpen}
          products={products}
          shoppingCart={shoppingCart}
          checkoutForm={checkoutForm}
          error={error}
          purchaseCompleted={purchaseCompleted}
          handleOnToggle={handleOnToggle}
          handleOnCheckoutFormChange={handleOnCheckoutFormChange}
          handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
        />
        <Navbar />
        <div
          className={!isOpen ? 'screen-content' : 'screen-content deactivated'}
          onClick={handleOnToggle}
        />
        <Routes>
          <Route
            path="/"
            element={(
              <Home
                products={products}
                activeQuery={activeQuery}
                category={category}
                shoppingCart={shoppingCart}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
                handleSearch={handleSearch}
                handleCategoryChange={handleCategoryChange}
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
