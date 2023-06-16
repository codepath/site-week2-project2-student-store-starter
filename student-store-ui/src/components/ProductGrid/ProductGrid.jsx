import * as React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid(props) {
  let newProducts;
  if (props.catSearch === "search") {
    newProducts = props.products?.filter((product) =>
      product.name.toLowerCase().includes(props.searchValue.toLowerCase())
    );
  } else if (props.catSearch === "category") {
    if (props.category === "all") {
      newProducts = props.products;
    } else {
      newProducts = props.products?.filter((product) =>
        product.category.toLowerCase().includes(props.category.toLowerCase())
      );
    }
  } else {
    newProducts = props.products;
  }
  return (
    <div className="product-gridContainer">
      <h2 id="buy-now">Best Selling Products</h2>
      <div className="product-grid">
        {newProducts?.length === 0 ? (
          <p className="grid-p">No products available 🛑</p>
        ) : (
          newProducts?.map((product) => <ProductCard product={product} />)
        )}
      </div>
    </div>
  );
}
