import * as React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({
  shoppingCart,
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  console.log(products)
  if (!products) {
    return; // should not display any products
  }
  if (products.length === 0) {
    return <div className="not-found"> PRODUCT NOT FOUND, SORRY!</div>;
  }
  return (
    <div id="Buy" className="product-grid">
      <div className="content">
        <h3>Our Products</h3>

        <div className="grid">
          {products?.map((product, index) => {
            return (
              <ProductCard
                key={index}
                product={product}
                index={index}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemToCart={handleRemoveItemToCart}
                shoppingCart={shoppingCart}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
