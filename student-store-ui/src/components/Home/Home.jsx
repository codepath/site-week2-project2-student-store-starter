import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import ProductGrid from "../ProductGrid/ProductGrid";
import Search from "../Search/Search";
import Category from "../Category/Category";
import { useState } from "react";

export default function Home({
  products,
  searchValue,
  setSearchValue,
  setCategory,
  category,
}) {
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <>
      <Navbar setShoppingCart={setShoppingCart} shoppingCart={shoppingCart} />
      <Hero />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Category setCategory={setCategory} />
      <ProductGrid
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
        products={products}
        searchValue={searchValue}
        category={category}
      />
      <About />
    </>
  );
}
