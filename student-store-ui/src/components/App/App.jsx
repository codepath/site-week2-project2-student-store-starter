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
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  // const url = "https://codepath-store-api.herokuapp.com/store";
  // const [products, setProducts] = useState();
  // useEffect(() => {
  //   axios.get(url).then((response) => {
  //     setProducts(response.data.products);
  //   });
  // }, []);
  // console.log(products);
  return (
    <div className="app">
      {/* <BrowserRouter> */}
        {/* <Routes>
        <Route path="/" element ={<Home></Home>}></Route>
        <Route path="/About" element={<About/>}></Route>
      </Routes> */}
        <main>
          <Sidebar />
          {/* {products?.map((product, index) =>
          <h1 key={index + product.name}>{product.name}
          </h1>
          )} */}
          <Navbar />
          <Hero />
          <Subnavbar />
          {/*
          <Subnavbar items {item} setItems 
          
          */}
          {/* {products?.map((product, index)=>
          // <Sidebar
          // label = {product.name}
          // />
          )} */}
          <Home />

          <About />
          <Contact />
          <Footer />
        </main>
      {/* </BrowserRouter> */}
    </div>
  );
}
