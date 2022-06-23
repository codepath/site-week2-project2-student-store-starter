import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductView from "../ProductView/ProductView";

export default function ProductDetail({handleAddItemToCart,shoppingCart,setshoppingCart,quantity,setQuantity, handleRemoveItemFromCart}) {
  const [product, setProduct] = useState();
  const [isFetching, setFetching] = useState(true);
  let { productId } = useParams();
  //console.log(productId)
  useEffect(() => {
    axios.get("http://localhost:3001/store/" + productId).then(function (response) {
        setProduct(response.data.product);
        setFetching(false);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  });


  return (
    <div className="product-detail">
      {isFetching ? (
        <h4>Loading...</h4>
      ) : (
        <ProductView quantity={quantity}  handleRemoveItemFromCart={handleRemoveItemFromCart} handleAddItemToCart={handleAddItemToCart} shoppingCart={shoppingCart} setshoppingCart={setshoppingCart} product={product} productId={productId}  showDescription={true}></ProductView>
      )}
    </div>
  );
}
