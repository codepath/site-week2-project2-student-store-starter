import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import ProductDetails from "../ProductDetails/ProductDetails";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Search from "../Search/Search";
import ProductGrid from "../ProductGrid/ProductGrid";
import Category from "../Category/Category";

import "./App.css";

export default function App() {
  // const [product, setProduct] = useState(null);
const [catSearch, setCatSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const url = "https://codepath-store-api.herokuapp.com/store";

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data.products);
      setProducts(response.data.products);
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
        <Routes>
          <Route exact path="/" element={<Home products={products}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            setCatSearch={setCatSearch}
            setCategory={setCategory}
            category={category}
            catSearch={catSearch}/>} />
          <Route path="/products/:id" element={<ProductDetails products={products} />}/>
        </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
