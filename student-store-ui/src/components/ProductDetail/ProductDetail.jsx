import React, { useState, useEffect } from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductView from "../ProductView/ProductView";
import NotFound from "../NotFound/NotFound";

export default function ProductDetail({handleAddItemToCart, handleRemoveItemFromCart, shoppingCart}) {
  const [product, setProduct] = useState(null);
  const [fetched, setFetched] = useState(false);
  const { id } = useParams();
  const url = `https://codepath-store-api.herokuapp.com/store/${id}`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setProduct(response.data.product);
      })
      .catch((error) => {
        console.error(error);
        setFetched(true);
      });
  }, [id]);

  return (
    <div className="product-details">
      {product === null ? (
        fetched ? (
          <NotFound />
        ) : (
          <h1 className="loading-text">LOADING...</h1>
        )
      ) : (
        <ProductView
          product={product}
          id={id}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
          shoppingCart={shoppingCart}
        />
      )}
    </div>
  );
}
