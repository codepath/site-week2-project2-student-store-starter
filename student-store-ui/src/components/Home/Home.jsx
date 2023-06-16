
import React, { useState } from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductDetails from "../ProductDetails/ProductDetails";
import { Link } from "react-router-dom";

export default function Home({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    "All Categories",
    "Clothing",
    "Food",
    "Accessories",
    "Tech"
  ];

// for filtering
  const productFilter = products?.filter((product) => {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    const lowercaseSelectedCategory = selectedCategory.toLowerCase() === "all categories" ? "" : selectedCategory.toLowerCase();
    const productName = product.name.toLowerCase();
    const matchesSearch = lowercaseSearchTerm === "" || productName.includes(lowercaseSearchTerm);
    const matchesCategory = lowercaseSelectedCategory === "" || product.category?.toLowerCase() === lowercaseSelectedCategory;
    return matchesSearch && matchesCategory;
  });
  // for product details
  if (selectedProduct) {
    return <ProductDetails product={selectedProduct} />;
  }

  return (
    <div className="home">
      <Hero />
      <br></br>
      <div className="Menu-bar">
        <div className="Search-bar-and-filter" >
          <input
            className="search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search!"
          />
          <br></br>
          <br></br>
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? "selected" : ""}
            >
              {cat}
            </button>
          ))}

        </div>
      </div>

      <div className="product-container">
        {productFilter?.map((product, idx) => {
          return (
              <Link key={idx} to={"products/" + product.id}>
              <div
              className="product"
              key={product.id}
              onClick={() => setSelectedProduct(product)} // Set the selected product
            >
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
              </Link>
    
          );
        })}
      </div>

      <div className="About">
        <h1>About ME!</h1>
        <h1>Find Your Merch!</h1>
        <p>I will be adding cool facts about me</p>
      </div>
      <br></br>
      <br></br>

      <div className="Footer">
      <h1>This is the footer!</h1>
        <h1>Find Your Merch!</h1>
      </div>
    </div>
    
    
  );
}
