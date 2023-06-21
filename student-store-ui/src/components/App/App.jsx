import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import Home from "../Home/Home";
import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";

export default function App() {
  //stores the product's list
  const [productList, setProductList] = useState([]);
  //   const [isFetching, setIsFetching] = useState(true);
  //   const [error, setIsError] = useState("");
  //   const [isOpen, setIsOpen] = useState("");
  //   const [shoppingCart, setShoppingCard] = useState("");
  //   const [checkoutForm, setCheckoutForm] = useState("");
  //useeffect, gets the api
  useEffect(() => {
    axios
      .get("https://codepath-store-api.herokuapp.com/store")
      .then((response) => setProductList(response.data.products))
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
      });
  }, []);
  // style="margin-left: 300px;"

  return (
    <>
      {/* returns the router and routes according to the url */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Home products={productList} />
                <Sidebar />
              </main>
            }
          />
          {/* <Route
            path="/AllCategories"
            element={<Home products={productList} />}
          /> */}
          <Route
            path="/products/:productId"
            element={
              <main>
                <ProductDetail />
                <Sidebar />
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
