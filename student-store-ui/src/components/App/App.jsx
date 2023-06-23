import * as React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";

export default function App() {
  // const url = "https://codepath-store-api.herokuapp.com/store"; 
  const url = "http://localhost:3001/store"
  const [products, setProducts] = useState([]);
  // const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);

  // fetch the data
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        setProducts([]);
      });
  }, []);

  // const adjustSidebar = (event) => {
  //   setIsOpen(!isOpen);
  // };

  const handleAddItemToCart = (id) => {
    let index = -1;

    // find if the element exists
    shoppingCart.forEach((element, i) => {
      element.itemId === id ? (index = i) : undefined;
    });

    if (index < 0) {
      shoppingCart.push({ itemId: id, quantity: 0 });
      index = shoppingCart.length - 1;
    }
    shoppingCart[index].quantity += 1;
    setShoppingCart([...shoppingCart]);
  };

  const handleRemoveItemFromCart = (id) => {
    let index = -1;

    // find if the element exists
    shoppingCart.forEach((element, i) => {
      element.itemId === id ? (index = i) : undefined;
    });

    // if the product is in the shopping cart, and has only one count, remove it completely
    // if it is but have more than one count, reduce it by 1
    if (index > -1) {
      shoppingCart[index].quantity > 1
        ? (shoppingCart[index].quantity -= 1)
        : shoppingCart.splice(index, 1);
    }
    setShoppingCart([...shoppingCart]);
  };

  return (
    <div className="app">
      <main>
        <BrowserRouter>
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    products={products}
                    shoppingCart={shoppingCart}
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemFromCart={handleRemoveItemFromCart}
                  />
                }
              />
              {/* <Route path="/about" element={<About/>} /> */}
              <Route
                path="/products/:id"
                element={
                  <ProductDetail
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemFromCart={handleRemoveItemFromCart}
                    shoppingCart={shoppingCart}
                  />
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Sidebar
            // isOpen={isOpen}
            shoppingCart={shoppingCart}
            products={products}
            // handleOnToggle={adjustSidebar}
          />
          <Navbar />
        </BrowserRouter>
      </main>
    </div>
  );
}
