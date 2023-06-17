import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
// import { Link } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import Hero from "../Hero/Hero";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SubNavbar from "../SubNavbar/SubNavbar";

export default function App() {

    // products list hook
    const [productList, setProductList] = useState([])
    // search hook
    const [searchValue, setSearchValue] = useState("")

    // categories hook
    const [activeCategory, setActiveCategory] = useState("All Categories")

    // Event handler for product search 
    const handleSearch = (event) => {
      setSearchValue(event.target.value)
    }

    // Fetches api products data
    useEffect(() => {
      axios.get(`https://codepath-store-api.herokuapp.com/store/`)
      .then((response) => {
        setProductList(response.data.products)
      })
      .catch((error) => {
        console.error(error);
      })
    }, [])


    return (
      <div className="app">
        <main>
        <Router>
          <Routes><Route path="/" element={<Home products={productList}
          searchValue={searchValue} handleSearch={handleSearch} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>}/>
            <Route path="/products/:productId" element={
            <main>
              <Navbar />
              <Hero />
              <SubNavbar />
              <ProductDetail />
              <Footer />
            </main>}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
        </Router>
        </main>
      </div>
    )
  }