import * as React from "react";
import "./ProductGrid.css";

export default function ProductGrid(props) {
  let newProducts;
  if (props.catSearch === "search") {
      newProducts = props.products?.filter((product) =>
      product.name.toLowerCase().includes(props.searchValue.toLowerCase()));
  } 
  else if (props.catSearch === "category") {
      if (props.category === "all") {
        newProducts = props.products;
      } 
      else {
        newProducts = props.products?.filter((product) =>
        product.category.toLowerCase().includes(props.category.toLowerCase()));
      }
  } 
  else {
    newProducts = props.products;
  }

  return (
    <div className="home">
      <div className="product-grid">
        {newProducts?.length === 0 ? (
          <p className="grid-p">No products available 🛑</p>
        ) : (
          newProducts?.map((product) => {
            return (
              <div className="product">
                <img
                  className="product-poster"
                  src={product.image}
                  alt={`Image of ${product.name}`}
                />
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
