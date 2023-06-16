import * as React from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import { useEffect, useState } from "react";
import "./App.css";
import SubNavBar from "../SubNavBar/SubNavBar";
import Hero from "../Hero/Hero";
import Logo from "../Logo/Logo";

export default function App() {
  const url = "https://codepath-store-api.herokuapp.com/store";
  const [products, setProducts] = useState([]);

  const results = products.filter((product) => {});
  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Logo />
          <Navbar />
          <Sidebar />
          <Hero />
          <SubNavBar products={products} />
          <Home products={products} />
        </main>
      </BrowserRouter>
    </div>
  );
}
