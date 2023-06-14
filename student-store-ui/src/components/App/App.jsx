import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Search from "../Search/Search";



import "./App.css";

export default function App() {
  const [searchValue, setSearchValue] = useState('');
  const url = "https://codepath-store-api.herokuapp.com/store"
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data.products)
      setProducts(response.data.products)
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
  }


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Hero />
          <Search products={products} searchValue={searchValue} handleChange={handleSearchChange}/>
          <Sidebar />
          <Home products={products}/>
          <About />
        </main>
      </BrowserRouter>
    </div>
  );
}
