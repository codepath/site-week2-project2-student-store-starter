import React, { useState } from "react";
import ProductGrid from "../ProductGrid/ProductGrid";
import "./Search.css"

export default function Search({ handleSearch, products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products); // Initialize with all products

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);

    // Filter products immediately as the search input changes
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
    <div className="search-bar">
        <input
          type="text"
          className="input"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="  Search for a product"
        />
        
        </div>
      <ProductGrid products={!filteredProducts ? products : filteredProducts} />
      </div>
      
  );
}

