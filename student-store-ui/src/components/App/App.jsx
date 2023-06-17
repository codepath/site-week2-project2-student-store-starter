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
  //   const [isFetching, setIsFetching] = useState(true);
  //   const [error, setIsError] = useState("");
  //   const [isOpen, setIsOpen] = useState("");
  //   const [shoppingCart, setShoppingCard] = useState("");
  //   const [checkoutForm, setCheckoutForm] = useState("");

  useEffect(() => {
    axios
      .get("https://codepath-store-api.herokuapp.com/store")
      .then((response) => setProductList(response.data.products))
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
      });
  }, []);

  console.log("App", productList);
  return (
    <>
      <div></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home products={productList} />} />
          <Route
            path="/AllCategories"
            element={<Home products={productList} />}
          />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
