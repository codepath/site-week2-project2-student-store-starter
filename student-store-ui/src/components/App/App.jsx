import * as React from 'react';
import {
  Routes, Route, Link, useParams, BrowserRouter,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home';
import './App.css';

import NotFound from '../NotFound/NotFound';
import ProductDetail from '../ProductDetail/ProductDetail';

const URL = 'https://codepath-store-api.herokuapp.com/store';
/* example API request give us
{"id":1,
"name":"Rice Krispies",
"category":"food",
"image":"https://upload.wikimedia.org/wikipedia/commons/c/cd/RKTsquares.jpg",
"source":"https://en.wikipedia.org/wiki/Rice_Krispies_Treats",
"description":"Delicious corn-based rice grains melted together with marshmallows into a square-like shape.",
"price":0.99}
*/

export default function App() {
  const [products, updateProducts] = useState([]);
  const [isFetching, updateIsFetching] = useState(false);
  const [error, updateError] = useState('');
  const [isOpen, updateIsOpen] = useState(false);
  const [shoppingCart, updateShoppingCart] = useState([]);
  const [checkoutForm, updateCheckoutForm] = useState({ email: '', name: '' });
  const [checkoutFormIsSubmitted, updateCheckoutFormIsSubmitted] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await axios(URL).then(({ data }) => {
        updateIsFetching(true);
        if (data.products) {
          updateProducts(data.products);
          updateError('');
        } else {
          updateError('Failed to get data: Products is empty');
        }
      })
        .catch((error) => {
          updateError(error.message);
        });
      updateIsFetching(false);
    }
    fetchData();
  }, [name]);

  // Handlers
  const handleOnToggle = () => {
    updateIsOpen(!isOpen);
  };

  const handleAddItemToCart = (newProductId) => {
    // Find where product is in shopping cart
    const productInCartIdx = shoppingCart.findIndex(
      (product) => product.productId === newProductId,
    );

    // Add to cart, depending on if its already in there
    if (productInCartIdx === -1) {
      const addedItem = { productId: newProductId, quantity: 1 };
      updateShoppingCart([...shoppingCart, addedItem]);
    } else {
      // new cart
      const copyCart = [...shoppingCart];
      copyCart[productInCartIdx].quantity = copyCart[productInCartIdx].quantity + 1;
      updateShoppingCart(copyCart);
    }
  };

  const handleRemoveItemFromCart = (productId) => {
    const copyCart = [...shoppingCart];
    copyCart.forEach((productInCart, idx) => {
      if (productInCart.productId === productId) {
        const newQuantity = copyCart[idx].quantity - 1;
        copyCart[idx].quantity = newQuantity;
        if (newQuantity === 0) {
          copyCart.splice(idx, 1);
        }
      }
    });
    updateShoppingCart(copyCart);
  };

  const handleOnCheckoutFormChange = (name, value) => {
    updateCheckoutForm({ ...checkoutForm, [name]: value });
  };

  const handleOnSubmitCheckoutForm = (user, shoppingCart) => {
    axios.post(URL, { user, shoppingCart }).then((response) => {
      if (!response) {
        updateError('Failed to submit checkout');
      } else {
        updateShoppingCart([]);
        updateCheckoutForm({ email: '', name: '' });
        updateError('');
        updateCheckoutFormIsSubmitted(true);
        console.log('didnt fail');
      }
    }).catch((error) => {
      updateError(error.message);
    });
  };

  // Helper to pass in to components - sidebar, shoppingcart, productdetail, home, productcard
  const findQuantity = (product) => {
    let quantity = 0;
    for (const productInCart of shoppingCart) {
      if (productInCart.productId === product.id) {
        quantity = productInCart.quantity;
        break;
      }
    }
    return quantity;
  };
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <div className="container">
            <Sidebar
              isOpen={isOpen}
              shoppingCart={shoppingCart}
              products={products}
              checkoutForm={checkoutForm}
              handleOnCheckoutFormChange={handleOnCheckoutFormChange}
              handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
              handleOnToggle={handleOnToggle}
              error={error}
              checkoutFormIsSubmitted={checkoutFormIsSubmitted}
              findQuantity={findQuantity}
            />
            <div className="wrapper">
              <Navbar />
              <Routes>
                <Route
                  path="/"
                  element={(
                    <Home
                      products={products}
                      handleAddItemToCart={handleAddItemToCart}
                      handleRemoveItemFromCart={handleRemoveItemFromCart}
                      shoppingCart={shoppingCart}
                      error={error}
                      findQuantity={findQuantity}
                    />
)}
                />
                <Route
                  path="/product/:productId"
                  element={(
                    <ProductDetail
                      handleAddItemToCart={handleAddItemToCart}
                      handleRemoveItemFromCart={handleRemoveItemFromCart}
                      shoppingCart={shoppingCart}
                      findQuantity={findQuantity}
                    />
)}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>

        </main>
      </BrowserRouter>
    </div>
  );
}
