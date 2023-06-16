import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Search from "../Search/Search";
import ProductGrid from "../ProductGrid/ProductGrid";
import Category from "../Category/Category";

export default function Home(props) {
  return (
    <>
      <Navbar />
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
        products={props.products}
        searchValue={props.searchValue}
        category={props.category}
        catSearch={props.catSearch}
      />
      <About />
    </>
  );
}
