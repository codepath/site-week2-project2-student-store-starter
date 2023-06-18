import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductView.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

const ProductView = ({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) => {
  console.log("Product view product " + product);
  console.log("Product id " + productId);

  return (
    //puts in the nav bar and the product card
    <div className="product-view">
      <Navbar />
      <Hero />
      <h1>{"Product " + product.id}</h1>

      <ProductCard
        productNeeded={handleAddItemToCart}
        product={product}
        quantity={quantity}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
        showDescription={false}
      />

      <p>{product.description}</p>
    </div>
  );
};

export default ProductView;
