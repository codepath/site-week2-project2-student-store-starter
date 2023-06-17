import * as React from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import Footer from "../Footer/Footer";
import Contact from "../ContactUs/ContactUs";
import About from "../About/About";
import SubNavBar from "../SubNavBar/SubNavBar";
import ProductDetails from "../Product Details/ProductDetails";
import Overlay from "../Overlay/Overlay";

export default function App() {
  const url = "https://codepath-store-api.herokuapp.com/store";

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All Categories");
 
  

  console.log(products);
  useEffect(() => {
    axios.get(url).then((response) => {
      // do stuff to data
      // console.log(response.data.products);
      setProducts(response.data.products);
    });
  }, []);

  // const handleChange = (event) => {
  //   event.preventDefault();
  //   setSearchTerm(event.target.value);
  //   console.log(event.target.value);
  // };

  const handleSubmit = (event) => {};

  return (
    <div className="app">
      <BrowserRouter>
        <main>

          <Routes>
            <Route path="" element={<Overlay category={category} setCategory={setCategory} searchInput={searchTerm} setSearchInput={setSearchTerm}
            />}>
              <Route path="" element={<Home products={products} searchTerm={searchTerm} category={category}/>} />
              
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path = "" element= {<About/>}/>
            </Route>
            
            
          </Routes>

        </main>
      </BrowserRouter>
    </div>
  );
}
