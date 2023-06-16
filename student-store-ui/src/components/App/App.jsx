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
          {/* {userNames.map(name=><p>{name}</p>)} */}
          {/* {products?.map((product,index) => (<h1 key = {index + product.name}>{product.name}</h1>) )} */}

          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>

          <Hero />
          <SubNavBar
            //handleChange={handleChange}
            //handleSubmit={handleSubmit}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            category={category}
            setCategory={setCategory}
          />

          <Sidebar />
          {/* <Hero/>
          <ProductGrid products = {products}/>
          <Footer/>
          <Home products = {products}/>  */}

          {/* <Home products={products} /> */}

          <ProductGrid products={products} searchTerm={searchTerm} category={category}/>



          <About />
        </main>
      </BrowserRouter>
    </div>
  );
}
