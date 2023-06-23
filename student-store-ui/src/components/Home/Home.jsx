import * as React from "react";
import "./Home.css";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function Home({
  products,
  searchTerm,
  selectedCategory,
  cart,
  setCart,
}) {
  return (
    <div className="home">
      <div className="home">
        <ProductGrid
          products={products}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          setCart={setCart}
          cart={cart}
        />
      </div>
    </div>
  );
}
