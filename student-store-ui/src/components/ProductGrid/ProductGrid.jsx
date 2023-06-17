import * as React from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid(props) {
  let newProducts;
  if (props.category === "all") {
    newProducts = props.products;

    newProducts = props.products?.filter((product) =>
    product.name.toLowerCase().includes(props.searchValue.toLowerCase())
  );
  } else {
    newProducts = props.products?.filter((product) =>
      product.name.toLowerCase().includes(props.searchValue.toLowerCase())
    );

    newProducts = newProducts?.filter((product) =>
      product.category.toLowerCase().includes(props.category.toLowerCase())
    );
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
