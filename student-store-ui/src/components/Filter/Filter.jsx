import React, { useState, useEffect } from "react";
import ProductGrid from "../ProductGrid/ProductGrid";
import "./Filter.css"

export default function Filter({ products }) {
  const [catSelect, setCatSelect] = useState(null);
  const [catProducts, setCatProducts] = useState(products); // Initialize with all products
 

  const handleCatChange = (event) => {
    const category = event.target.dataset.category; // Access the data category
    setCatSelect(category);
    console.log(category)
    console.log(products)
    const filtered = products.filter((product) =>
      product.category.includes(category)
    );
    setCatProducts(filtered);
  };

  return (
    <div>
    <nav className="navbar">
      <div className="navcontent">
      <ul className="filter">
        <li className="filter" onClick={handleCatChange} data-category="clothing">Clothing</li>
        <li className="filter" onClick={handleCatChange} data-category="accessories">Accessories</li>
        <li className="filter" onClick={handleCatChange} data-category="tech">Tech</li>
        <li className="filter" onClick={handleCatChange} data-category="food">Food</li>
        </ul>

      </div>
    </nav>
    <ProductGrid products={!catProducts ? products : catProducts} />
    </div>
      
  );
}

