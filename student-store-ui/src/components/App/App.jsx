import * as React from "react";
import axios from "axios";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import Hero from "../Hero/Hero";
import SubNavbar from "../SubNavbar/SubNavbar";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ProductDetails from "../Product Details/ProductDetails";

export default function App() {
  const url = "https://codepath-store-api.herokuapp.com/store";

  const [items, setItems] = useState([])
  const [category, setCategory] = useState('')
  const [productsByCategory, setProductsByCategory] = useState([])
  const [isActive, setIsActive] = useState(false);
  const [products, setProducts] = useState([]);

  console.log('app', category)
  useEffect(() => {
    axios.get(url).then((response) => {
      const dataProducts = response.data.products
      setProducts(dataProducts);
      setProductsByCategory(dataProducts)
    });
  }, [items, category]);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar
            handleClick={() => setIsActive(!isActive)}
            isActive={isActive}
          />
          <Hero />
          <SubNavbar 
            items={items} 
            setItems={setItems} 
            products={products}
            setProducts={setProducts}
            setCategory={setCategory}
            category={category}/>
          <Routes>
            <Route
              path="/"
              element={<Home  products={products} items={items} category={category} />}
            />
            <Route path="/:id" element={<ProductDetails />} />
          </Routes>
          <About />
          <Contact />
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}
