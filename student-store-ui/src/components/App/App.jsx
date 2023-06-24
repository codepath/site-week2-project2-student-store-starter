import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import Hero from "../Hero/Hero";
import Subnavbar from "../Subnavbar/Subnavbar";
import { useEffect, useState } from "react";
import axios from "axios";
import About from "../About/About";
import Contact from "../Contact/Contact";
import ProductDetail from "../ProductDetail/ProductDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const temp = "https://codepath-store-api.herokuapp.com/store";
  const url = "http://localhost:3001/";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(temp).then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  const [searchInput, setSearchInput] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [sidebar, setSidebar] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // let quantityList = [];

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Hero />
          <Subnavbar
            setSearchInput={setSearchInput}
            setCurrentCategory={setCurrentCategory}
          />
          <Sidebar sidebar={sidebar} setSidebar={setSidebar} cartItems={cartItems} setCartItems={setCartItems} products={products}/>
          {/* <ProductRow products={products} cartItems={cartItems} setCartItems={setCartItems}></ProductRow> */}
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  searchInput={searchInput}
                  currentCategory={currentCategory}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              }
            />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
          <About />
          <Contact />
        </main>
      </BrowserRouter>
    </div>
  );
}
