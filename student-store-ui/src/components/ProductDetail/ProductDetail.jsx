import React, { useState, useEffect } from "react";
import ProductView from "../ProductView/ProductView";
import { Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail({
  shoppingCart,
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(async () => {
    try {
      const response = await axios.get(
        `https://codepath-store-api.herokuapp.com/store/${params.productId}`
      );
      setProduct(response.data.product);
      console.log(product);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="product-detail">
      <ProductView
        product={product}
        productId={params.productId}
        quantity={() => {
          const shoppingCartItem = shoppingCart.find(
            (item) => item.itemId == params.productId
          );
          return shoppingCartItem ? shoppingCartItem.quantity : 0;
        }}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
      />
    </div>
  );
}
