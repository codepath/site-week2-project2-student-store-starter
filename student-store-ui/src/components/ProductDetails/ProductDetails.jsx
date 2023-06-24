import * as React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Search from "../Search/Search";
import { useEffect, useState } from "react";
import axios from "axios";


export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${id}`).then((response) => {
      console.log(response.data[0])
      setProduct(response.data[0])
    });
  }, []);


  return (
    <>
      <Navbar />
      <Hero />
      <Search />
      <h2 style={{ margin: "0 auto", marginTop:"80px" }}>Product: {product.name}</h2>
      <img
        style={{ width: "500px", height: "500px", margin: "0 auto" }}
        src={product.image}
      />
        <p id="price" style={{margin:'0 auto'}}>${product.price}</p>
      <p style={{margin: "0 auto" }}>⭐⭐⭐⭐⭐</p>
      <p style={{ margin: "0 auto", marginBottom:"80px" }}>{product.description}</p>
    </>
  );
}
