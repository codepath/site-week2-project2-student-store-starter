/* eslint-disable no-console */
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

export default function ProductDetail({
  shoppingCart, handleAddItemToCart, handleRemoveItemFromCart,
  isFetching, setIsFetching, setError, error,
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
    setIsFetching(true);
    try {
      if (productIDisValid(id)) {
        const { data } = await axios(`${URL}/${id}`);
        console.log('Product ', data);
        setProduct(data.product);
        setError('');
      } else {
        setProduct({});
        setError('Invalid ID');
      }
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setIsFetching(false);
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

  // loading screen
  if (isFetching) {
    return (<h1 className="loading">Loading...</h1>);
  }
  // if product search does/will not succeed
  if (error !== '' || !productIDisValid(productId)) {
    return (<NotFound />);
  }
  return (
    <div className="product-detail">
      <ProductView
        key={productId}
        product={product}
        productId={parseInt(productId, 10)}
        shoppingCart={shoppingCart}
        showDescription
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
      />
    </div>
  );
}
