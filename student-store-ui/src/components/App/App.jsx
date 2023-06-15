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

export default function App() {
  const url = "https://codepath-store-api.herokuapp.com/store";

  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products);

    });
  }, [items]);

  const [isActive, setIsActive] = useState(false);


  return (
    <div className="app">
      <BrowserRouter>

        <Routes>
          <Route to="/" element={<Home />} />
          <Route to="/about" element={<About />} />
          <Route to="/contact" element={<Contact />} />
        </Routes>

        <main>
          <Navbar />
          <Sidebar
            handleClick={() => setIsActive(!isActive)}
            isActive={isActive}
          />
          <Hero />
          <SubNavbar items={items} setItems={setItems} />
          <Home products={ products } items={items} />          
          <About />
          <Contact />
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}
