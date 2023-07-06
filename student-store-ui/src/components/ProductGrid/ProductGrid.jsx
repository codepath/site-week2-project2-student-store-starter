import * as React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid(props) {
  let newProducts;

  if (props.catValue === "all") {
    newProducts = props.products;

    newProducts = props.products?.filter((product) =>
      product.name.toLowerCase().includes(props.searchValue.toLowerCase())
    );
  } else {
    newProducts = props.products?.filter((product) =>
      product.name.toLowerCase().includes(props.searchValue.toLowerCase())
    );

    newProducts = newProducts?.filter((product) =>
      product.category.toLowerCase().includes(props.catValue.toLowerCase())
    );
  }

  return (
    <>
      <h2 id="buy-now" style={{ marginLeft: "180px", font: "large" }}>
        Best Selling Products
      </h2>
      <div className="productGrid">
        {newProducts?.length === 0 ? (
          <p className="gridP">Nun Here!</p>
        ) : (
          newProducts?.map((product) => (
            <ProductCard
              product={product}
              setShoppingCart={props.setShoppingCart}
              shoppingCart={props.shoppingCart}
            />
          ))
        )}
      </div>
    </>
  );
}
