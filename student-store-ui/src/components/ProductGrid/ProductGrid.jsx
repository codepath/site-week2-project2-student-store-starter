import * as React from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({
  shoppingCart,
  setShoppingCart,
  products,
  searchValue,
  category,
}) {
  let newProducts;
  if (category === "all") {
    newProducts = products?.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  } else {
    newProducts = products?.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    newProducts = newProducts?.filter((product) =>
      product.category.toLowerCase().includes(category.toLowerCase())
    );
  }

  return (
    <div className="product-gridContainer">
      <h2 id="buy-now">Best Selling Products</h2>
      <div className="product-grid">
        {newProducts?.length === 0 ? (
          <p className="grid-p">No products available 🛑</p>
        ) : (
          newProducts?.map((product) => (
            <ProductCard
              product={product}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          ))
        )}
      </div>
    </div>
  );
}
