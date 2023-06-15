import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";

export default function App() {
  const [productList, setProductList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setIsError] = useState("");
  const [isOpen, setIsOpen] = useState("");
  const [shoppingCart, setShoppingCard] = useState("");
  const [checkoutForm, setCheckoutForm] = useState("");

  useEffect(() => {
    axios
      .get(`https://codepath-store-api.herokuapp.com/store/`)
      .then((response) => {
        //not sure
        setProductList(response.data.products);
        console.log(productList);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}

          {/* <ProductCard/> */}

          {/* <Home /> */}
        </main>
        <Routes>
          <Route path="/" element={<Home products={productList} />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
