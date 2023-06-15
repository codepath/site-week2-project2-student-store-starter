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
      // console.log(response.data.products);
      setProducts(response.data.products);
    });
  }, []);

  const [isActive, setIsActive] = useState(false);
  
  // console.log(items[0].productName)
  // console.log(products)
  // console.log(products.filter(item => item.name.includes(items[0]?.productName)))
  return (
    <div className="app">
      <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes> */}
        <main>
          <Navbar />
          <Sidebar
            handleClick={() => setIsActive(!isActive)}
            isActive={isActive} // not sure what to put here
          />
          <Hero />
          <SubNavbar items={items} setItems={setItems} />
          {items.length ? 
          products.filter(item => item.name.includes(items[0]?.productName))
          .map((product, index) => <Home key={index} products={[{product}]}/>) :
          <Home products={products}/>
          
          }
          <About />
          <Contact />
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}
