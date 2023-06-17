import * as React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

export default function ProductDetail({ products }) {
  const { id } = useParams();

  // debugger;
  console.log(products);
  if (products.length === 0) {
    return <h2 style={{ margin: "0 auto" }}>Loading...</h2>;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <h2 style={{ margin: "0 auto" }}>Product: {products[id - 1].name}</h2>
      <img
        style={{ width: "500px", height: "500px", margin: "0 auto" }}
        src={products[id - 1].image}
      />
      <p style={{ margin: "0 auto" }}>{products[id - 1].description}</p>
    </>
  );
}
