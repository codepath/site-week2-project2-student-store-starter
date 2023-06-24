import * as React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Hero from "../Hero/Hero";
import ProductCard from "../ProductCard/ProductCard";
import Search from "../Search/Search";
import { useState } from "react";
import SubNavBar from "../SubNavBar/SubNavBar";

export default function Home({ products, shoppingCart, setShoppingCart }) {
  // search state
  // a variable that stored the filtered products
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const filter = products.filter((product) => {
    return (
      product.category.toLowerCase().includes(category.toLowerCase()) &&
      product.name.toLowerCase().includes(text.toLowerCase())
    );
  });

  return (
    <div className="home">
      <br></br>

      <Hero />
      <Search text={text} setText={setText} />
      <SubNavBar category={category} setCategory={setCategory} />
      <div className="grid-content">
        <div className="products-grid">
          {filter?.map((product, idx) => {
            return (
              <ProductCard
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
                product={product}
                name={product.name}
                id={product.id}
                image={product.image}
                price={product.price.toLocaleString("us-EN", {
                  style: "currency",
                  currency: "USD",
                })}
                key={idx}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
