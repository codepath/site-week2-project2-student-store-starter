/* eslint-disable react/prop-types */
import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import ProductView from '../ProductView/ProductView';
import NotFound from '../NotFound/NotFound';

// helper function; determines if product ID is valid
function productIDisValid(productId) {
  return productId > 0 && productId <= 16;
}

// helper function; get quantity of specific product in cart
function getProductQuantity(shoppingCart, productId) {
  const productIndex = shoppingCart.findIndex((product) => product.id === productId);
  if (productIndex !== -1) return shoppingCart[productIndex].quantity;
  return 0;
}

export default function ProductDetail({
  shoppingCart, handleAddItemToCart, handleRemoveItemFromCart, setError, error,
}) {
  // **********************************************************************
  // CONSTANTS
  // **********************************************************************

  const URL = 'https://codepath-store-api.herokuapp.com/store';

  // **********************************************************************
  // STATE VARIABLES AND FUNCTIONS
  // **********************************************************************

  const [product, setProduct] = useState({});

  // **********************************************************************
  // URL PARAMS
  // **********************************************************************

  const { productId } = useParams();

  // **********************************************************************
  // AXIOS GET
  // **********************************************************************

  async function fetchProduct(id) {
    if (productIDisValid(id)) {
      try {
        const { data } = await axios(`${URL}/${id}`);
        console.log('Product ', data);
        setProduct(data.product);
        setError('');
      } catch (err) {
        console.error(err);
        setError(err);
      }
    }
  }

  // **********************************************************************
  // FETCH DATA ON PAGE LOAD
  // **********************************************************************

  useEffect(() => {
    fetchProduct(productId);
  }, []);

  // **********************************************************************
  // PAGE RENDERING
  // **********************************************************************

  return (
    <div className="product-detail">
      {error === '' && productIDisValid(productId) ? (
        <ProductView
          key={productId}
          product={product}
          productId={productId}
          quantity={getProductQuantity(shoppingCart, productId)}
          showDescription
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
        />
      ) : <NotFound />}
    </div>
  );
}
