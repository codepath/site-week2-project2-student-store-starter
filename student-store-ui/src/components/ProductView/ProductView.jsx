import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductView.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

const ProductView = ({
  shoppingCart,
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemFromCart,
}) => {
  // console.log("Product view product " + product);
  // console.log("Product id " + productId);

  return (
    //puts in the nav bar and the product card
    <div className="product-view">
      <Navbar />
      <Hero />
      <h1>{"Product " + product.id}</h1>

      <ProductCard
        shoppingCart={shoppingCart}
        product={product}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
      />

      <p>{product.description}</p>
    </div>
  );
};

export default ProductView;
