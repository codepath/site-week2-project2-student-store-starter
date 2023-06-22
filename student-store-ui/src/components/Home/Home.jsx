import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import ProductGrid from "../ProductGrid/ProductGrid";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Search from "../Search/Search";
import Category from "../Category/Category";
import { useState } from 'react';

export default function Home(props) {
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <>
      <Navbar setShoppingCart={setShoppingCart} shoppingCart={shoppingCart} />
      <Hero />
      <Search
        products={props.products}
        searchValue={props.searchValue}
        setSearchValue={props.setSearchValue}
        setCatSearch={props.setCatSearch}
      />
      <Category
        setCategory={props.setCategory}
        setCatSearch={props.setCatSearch}
      />
      <ProductGrid
        shoppingCart = {shoppingCart}
        setShoppingCart = {setShoppingCart}
        products={props.products}
        searchValue={props.searchValue}
        category={props.category}
      />
      <About />
    </>
  );
}
