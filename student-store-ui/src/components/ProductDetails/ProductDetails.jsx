import * as React from "react";
import "./ProductDetails.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

import { useParams } from "react-router-dom";

export default function ProductDetail(props) {
  const { id } = useParams();

  const product = props.products.find((product) => product.id == parseInt(id));

  if (props.products.length === 0) {
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
      <h2 id="details-header">Product #{id}</h2>
      <div className="prod-details">
        <img
          className="pd-poster"
          src={product.image}
          alt={`Image of ${product.name}`}
        />
        <div className="product-info">
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
}
