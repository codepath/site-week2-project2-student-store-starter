import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductView from "../ProductView/ProductView";

export default function ProductDetail(props) {
  const [product, setProduct] = useState();
  const [isFetching, setFetching] = useState(true);
  let { productId } = useParams();
  useEffect(() => {
    axios.get("http://localhost:3001/store/" + productId)
    .then((response) => {
        setProduct(response.data);
        setFetching(false);
      })
      .catch((error) =>{
        console.log(error.message);
      });
  },[]);


  return (
    <div className="product-detail">
      {isFetching ? (
        <h4>Loading...</h4>
      ) : (
        <ProductView handleRemoveItemFromCart={props.handleRemoveItemFromCart} 
        handleAddItemToCart={props.handleAddItemToCart} shoppingCart={props.shoppingCart} 
        setshoppingCart={props.setshoppingCart} product={product} productId={productId}  
        showDescription={true}></ProductView>
      )}
    </div>
  );
}