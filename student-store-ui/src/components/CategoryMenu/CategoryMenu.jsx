import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import axios from "axios";

export default function CategoryMenu({
  //   setProducts,
  //   originalProducts,
  setCategory,
  //   category,
}) {
  /* ---- Filter Functions ---- */

  //   const filterProducts = (category) => {
  //     if (category == "") {
  //       setProducts(originalProducts);
  //     } else {
  //       const filteredProducts = originalProducts.filter(
  //         (product) => product.category == category
  //       );
  //       setProducts(filteredProducts);
  //     }
  //   };

  // //   useEffect(filterProducts, [category]);

  //   const filterByClothing = () => {
  //     const filteredProducts = originalProducts.filter(
  //       (product) => product.category == "clothing"
  //     );
  //     setProducts(filteredProducts);
  //   };

  //   const filterByFood = () => {
  //     const filteredProducts = originalProducts.filter(
  //       (product) => product.category == "food"
  //     );
  //     setProducts(filteredProducts);
  //   };

  //   const filterByAccessories = () => {
  //     const filteredProducts = originalProducts.filter(
  //       (product) => product.category == "accessories"
  //     );
  //     setProducts(filteredProducts);
  //   };

  //   const filterByTech = () => {
  //     const filteredProducts = originalProducts.filter(
  //       (product) => product.category == "tech"
  //     );
  //     setProducts(filteredProducts);
  //   };

  //   const filterByAll = () => {
  //     setProducts(originalProducts);
  //   };

  //   const filteredProducts = (category) => {
  //     if (category == "") {
  //         return products;
  //     }
  //     else {
  //         return products.filter(
  //             (product) => product.category == "tech"
  //         );
  //     }
  //   }

  return (
    <div className="category-menu">
      <div>
        <p onClick={() => setCategory("all")}>All Categories</p>
        <p onClick={() => setCategory("clothing")}>Clothing</p>
        <p onClick={() => setCategory("food")}>Food</p>
        <p onClick={() => setCategory("accessories")}>Accessories</p>
        <p onClick={() => setCategory("tech")}>Tech</p>
      </div>
    </div>
  );
}
