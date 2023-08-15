import * as React from "react";
import "./ProductDetails.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Search from "../Search/Search";
import Category from "../Category/Category";
import { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  let url = `https://studentstore-backend.onrender.com/store/${id}`;

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(response.data[0]);
    });
  }, []);

  if (product.length === 0) {
    return (
      <>
        <Navbar />
        <Hero />

        <div id="loading">
          <h1>Loading...</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Search />
      <Category />
      <h2 id="details-header">Product #{id}</h2>
      <div className="prod-details">
        <img
          className="pd-poster"
          src={product.image}
          alt={`Image of ${product.name}`}
        />
        <div className="productdet-info">
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
}
