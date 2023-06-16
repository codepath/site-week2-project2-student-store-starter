import * as React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Hero from "../Hero/Hero";
import ProductCard from "../ProductCard/ProductCard";
import Search from "../Search/Search";
import { useState } from "react";

export default function Home({ products }) {
  // search state
  // a variable that stored the filtered products
  const [text, setText] = useState("");

  const filterProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(text.toLowerCase());
  });

  return (
    <div className="home">
      <br></br>
      <Search text={text} setText={setText} />
      <div className="products-grid">
        {filterProducts?.map((product, idx) => {
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
