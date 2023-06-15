import React, { useState } from "react";
import ProductGrid from "../ProductGrid/ProductGrid";

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
    <div className="search-bar">
      <form>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for a product"
        />
        <button type="submit">Clear</button>
      </form>
      <ProductGrid products={filteredProducts} /> 
    </div>
  );
}

