import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import Subnavbar from "../Subnavbar/Subnavbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function App() {
  const url = "https://codepath-store-api.herokuapp.com/store";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products);
    });
  }, []);
  console.log(products);
  return (
    <div className="app">
      {/* <BrowserRouter> */}
      {/* <Routes>
        <Route path="/" element ={<Home></Home>}></Route>
        <Route path="/About" element={<About/>}></Route>
      </Routes> */}
      <main>
        <Sidebar />

        <Navbar />
        <Hero />
        <Subnavbar />

        {/*
          <Subnavbar items {item} setItems 
          
          */}



        <Home products ={products}/>

        <About />
        <Contact />
        <Footer />
      </main>
      {/* </BrowserRouter> */}
    </div>
  );
}
