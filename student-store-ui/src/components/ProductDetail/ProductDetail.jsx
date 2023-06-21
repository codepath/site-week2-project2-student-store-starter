import axios from "axios"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProductDetail.css"

export default function ProductDetail() {
  const {id} = useParams();
  const [product, getProduct] = useState({});

  useEffect(() => {
    axios.get(`https://codepath-store-api.herokuapp.com/store/${id}`).then((response) => {
      getProduct(response.data.product);
    });
  }, []);

  return (
    <div>
      <img className = "image" src={product.image} /><br/>
      Name: {product.name}<br/>
      Price: {product.price}<br/>
      Description: {product.description}
    </div>
  )
}
