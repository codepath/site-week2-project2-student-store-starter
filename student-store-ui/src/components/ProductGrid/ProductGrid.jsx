import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";

const ProductGrid = ({ products, devcategory }) => {
  // console.log("pro", products[1].category);
  // const [filteredData, setFilteredData] = useState(products);
  // console.log("filter", filteredData);

  // products.filter((product) => console.log(product.category));

  // setFilteredData(
  //   products.filter((product) => product.category.includes("food"))
  // );
  // console.log("flte", filteredData);
  return (
    <div
      id="AllCategories"
      style={{
        width: "100%",
        minHeight: "20vh",
        display: "flex",
        flexWrap: "wrap",
        marginTop: "5px",
      }}
    >
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            productId={product.id}
          />
        );
      })}
    </div>
  );
};

// <ProductCard key={product.id} product={product} />;

export default ProductGrid;
