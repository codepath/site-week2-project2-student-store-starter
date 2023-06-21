import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import Hero from "../Hero/Hero"
import SubNavbar from "../SubNavbar/SubNavbar"
import { useEffect } from "react"
import axios from 'axios'
import { useState } from "react";

export default function App() {
  const url = "https://codepath-store-api.herokuapp.com/store";
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Hero />
          <SubNavbar 
          setCategory={setSelectedCategory}
          setSearchTerm={setSearchTerm} />
          <Sidebar />
          <Home 
            products={products} 
            selectedCategory={selectedCategory} 
            searchTerm={searchTerm}
          />
        </main>
      </BrowserRouter>
    </div>
  );
}