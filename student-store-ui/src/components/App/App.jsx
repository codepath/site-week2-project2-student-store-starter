import * as React from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const url = "https://codepath-store-api.herokuapp.com/store";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <div className="hero">
            <div className="content">
              <div className="intro">
                <h1 className="h1">Welcome!</h1>
                <h1 className="h1">Find your Merch!</h1>
                <p>
                  We have all kinds of goodies. Click on any of the items to
                  start filling up your shopping cart. Checkout whenever you're
                  ready.
                </p>
              </div>
              <div className="media">
                <img
                  src="/assests/student_store_icon.18e5d61a.svg"
                  alt="hero-icon"
                  className="hero-img"
                />
              </div>
            </div>
          </div>
          <Sidebar />
          <Home products={products} />
        </main>
      </BrowserRouter>
    </div>
  );
}
