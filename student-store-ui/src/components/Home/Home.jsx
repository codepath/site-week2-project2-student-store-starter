
import React, { useState } from "react";
import "./Home.css";
import Hero from "../Hero/Hero";

export default function Home({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = [
    "All Categories",
    "Clothing",
    "Food",
    "Accessories",
    "Tech"
  ];

  const productFilter = products?.filter((product) => {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    const lowercaseSelectedCategory = selectedCategory.toLowerCase() === "all categories" ? "" : selectedCategory.toLowerCase();
    const productName = product.name.toLowerCase();
    const matchesSearch = lowercaseSearchTerm === "" || productName.includes(lowercaseSearchTerm);
    const matchesCategory = lowercaseSelectedCategory === "" || product.category?.toLowerCase() === lowercaseSelectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="home">
      <Hero />
      <div className="Menu-bar">
        <p>I will add search and the filter thing here</p>
        <div className="Row-for-Seach-and-Cart-icon">
          <div className="Search-Bar">
            <input type="text" name="search" placeholder="Search" />
            <br />
            <button>Cart</button>
            {/* I will open the cart from here */}
          </div>
        </div>
        <div className="Menu-bar-button-fliter">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search!"
          />
          {categories.map((cat, index) => (
            <button key={index} onClick={() => setSelectedCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="product-container">
        {productFilter?.map((product) => {
          return (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          );
        })}
      </div>

      <div className="hero">
        <h1>About ME!</h1>
        <h1>Find Your Merch!</h1>
        <p>I will be adding cool facts about me</p>
      </div>
    </div>
  );
}
