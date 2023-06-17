import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import ProductGrid from "../ProductGrid/ProductGrid";
import Search from "../Search/Search";
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
      />
      <About />
    </>
  );
}
