import * as React from "react"
import "./ProductDetail.css"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"

export default function ProductDetail(props) {
  //states
  const [product, setProduct] = React.useState({});
  const {productId} = useParams(0);
  
  return (
    <div className="product-detail">
      <p>Product Detail</p>
    </div>
  )
}
