import * as React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Hero from "../Hero/Hero";
import ProductCard from "../ProductCard/ProductCard";

export default function Home({ products }) {
  return (
    <div className="home">
      <br></br>
      <div className="products-grid">
        {products?.map((product, idx) => {
          return (
            <ProductCard
              name={product.name}
              id={product.id}
              image={product.image}
              price={product.price}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
}
