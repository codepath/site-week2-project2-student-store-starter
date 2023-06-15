import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
// import Home from "../Home/Home";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Search from "../Search/Search";
import ProductGrid from "../ProductGrid/ProductGrid";
import Category from "../Category/Category";



import "./App.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [catSearch, setCatSearch] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);
  const url = "https://codepath-store-api.herokuapp.com/store"

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data.products)
      setProducts(response.data.products)
    });
  }, []);

  // const handleSearchChange = (event) => {
  //   setSearchValue(event.target.value)
  // }


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
          <Hero />
          <Search products={products} searchValue={searchValue} setSearchValue={setSearchValue} setCatSearch={setCatSearch}/>
          <Category setCategory={setCategory} setCatSearch={setCatSearch} />
          <ProductGrid products={products} searchValue={searchValue} category={category} catSearch={catSearch}/>
          <About />
        </main>
      </BrowserRouter>
    </div>
  );
}
