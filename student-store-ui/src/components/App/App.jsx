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
import ProductDetails from "../ProductDetails/ProductDetails";

export default function App() {
  const url = "http://localhost:3001";
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

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
          <Sidebar
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  shoppingCart={shoppingCart}
                  setShoppingCart={setShoppingCart}
                />
              }
            />
            <Route path="products/:id" element={<ProductDetails />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
