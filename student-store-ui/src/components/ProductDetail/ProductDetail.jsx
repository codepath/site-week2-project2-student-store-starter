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
  const url = `http://localhost:3001/store/${id}`
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setProduct(response.data.product);
        setFetched(true);
      })
      .catch((error) => {
        console.error(error);
        setFetched(true);
        setProduct(error.response.data.product)
      });
  }, [id]);

  return (
    <div className="product-details">
      {/* if there are no products but the data has been fetched then the product was likely not found
      if there are no products and the data has not been fethced, we should display a loading screen */}
      {(product === null || Object.keys(product).length === 0)? (
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
