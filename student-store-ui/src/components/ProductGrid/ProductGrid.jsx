import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import Search from "../Search/Search";

export default function ProductGrid({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  findQuantity,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filteredProducts = products.filter((product) => {
    if (category == "all") {
      return product.name.toLowerCase().includes(searchQuery);
    } else {
      return (
        product.category == category &&
        product.name.toLowerCase().includes(searchQuery)
      );
    }
  });

  return (
    <div className="products-container">
      <Search setSearchQuery={setSearchQuery} />
      <CategoryMenu setCategory={setCategory} />
      <h1 className="header">Best Selling Products</h1>
      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            productId={product.id}
            quantity={findQuantity(product.id)}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemToCart={handleRemoveItemToCart}
            showDescription={false}
          />
        ))}
      </div>
    </div>
  );
}
