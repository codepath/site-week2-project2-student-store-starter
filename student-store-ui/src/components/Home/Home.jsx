import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Search from "../Search/Search";
import ProductGrid from "../ProductGrid/ProductGrid";
import { useState } from "react";

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
        setCatValue={props.setCatValue}
        setSearchCatValue={props.setSearchCatValue}
      />

      <ProductGrid
        products={props.products}
        searchValue={props.searchValue}
        catValue={props.catValue}
        searchCatValue={props.searchCatValue}
        setShoppingCart={setShoppingCart}
        shoppingCart={shoppingCart}
      />

      <About />
      <Contact />
      <Footer />
    </>
  );
}
