import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetails from "../ProductDetails/ProductDetails";
import "./App.css";
import Subnavbar from "../Subnavbar/Subnavbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const url = "http://localhost:3001/";

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  return (
    <div className="app">
      <main>
        <BrowserRouter>
          <Sidebar cart={cart} setCart={setCart} products={products} />
          <Navbar />
          <Hero />
          <Subnavbar
            setSearchTerm={setSearchTerm}
            setSelectedCategory={setSelectedCategory}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  searchTerm={searchTerm}
                  selectedCategory={selectedCategory}
                  cart={cart}
                  setCart={setCart}
                />
              }
            ></Route>
            <Route path="/About" element={<About />}></Route>
            <Route
              path="/products/:id"
              element={
                <ProductDetails
                  cart={cart}
                  setCart={setCart}
                  products={products}
                />
              }
            ></Route>
          </Routes>
          <About />
          <Contact />
          <Footer />
        </BrowserRouter>
      </main>
    </div>
  );
}
