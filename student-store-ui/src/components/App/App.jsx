import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import Hero from "../Hero/Hero"
import Subnavbar from "../Subnavbar/Subnavbar"
import { useEffect, useState } from "react";
import axios from "axios";
import About from "../About/About"
import Contact from "../Contact/Contact"

export default function App() {
  const url = "https://codepath-store-api.herokuapp.com/store";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  const [searchInput, setSearchInput] = useState('');
  const [currentCategory, setCurrentCategory] = useState("");

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Hero />
          <Subnavbar setSearchInput={setSearchInput} setCurrentCategory={setCurrentCategory}/>
          <Sidebar />
          <Home products={products} searchInput={searchInput} currentCategory={currentCategory}/>
          <About/>
          <Contact />
        </main>
      </BrowserRouter>
    </div>
  )
}
