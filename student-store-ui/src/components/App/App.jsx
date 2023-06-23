import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
// import { Link } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import Hero from "../Hero/Hero";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import SubNavbar from "../SubNavbar/SubNavbar";

export default function App() {
  // products list hook
  const [productList, setProductList] = useState([]);

  // search hook
  const [searchValue, setSearchValue] = useState("");

  // categories hook
  const [activeCategory, setActiveCategory] = useState("All Categories");

  // isFetching state variable
  const [isFetching, setIsFetching] = useState(false);

  // isCheckingOut state variable
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // error state variable
  const [error, setError] = useState(null);

  // isOpen state variable
  const [isOpen, setIsOpen] = useState("closed");

  // shoppingCart state variable
  const [shoppingCart, setShoppingCart] = useState([]);

  // checkoutForm state variable
  const [checkoutForm, setCheckoutForm] = useState(false);

  // Event handler for product search
  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  // const getTotal = () => {
  //   const totalPrice = shoppingCart.map(product => (

  //   ))
  // }

  // Event handler for the open/closed state of the sidebar
  const handleOnToggle = (event) => {
    if (isOpen == "closed") {
      setIsOpen("open");
    } else {
      setIsOpen("closed");
    }
  };

  // Event handler to add items to cart
  const handleAddItemToCart = (product) => {
    let id = product.id;
    // console.log(id);
    let newCart;

    if (!shoppingCart.find((item) => item.id === id)) {
      newCart = [
        ...shoppingCart,
        { name: product.name, price: product.price, id: id, quantity: 1 },
      ];
    } else {
      newCart = shoppingCart?.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    }
    setShoppingCart(newCart);
  };
  console.log(shoppingCart);

  // Event handler to remove items to cart
  const handleRemoveItemFromCart = (product) => {
    let newCart = shoppingCart?.map((item) => {
      if (item.id === product.id && item.quantity === 1) {
        console.log("--here in the if statement---");
      } else if (item.id === product.id) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        // return item;
      }
    });
    setShoppingCart(newCart);
  };

  // Event handler to get quantity of a specified item
  const handleGetItemQuantity = (item) => {
    getQuantityOfItemInCart(shoppingCart, item);
  };

  const handleOnCheckoutFormChange = () => {};

  // Event handler to get total number of items in cart
  const handleGetTotalCartItems = () => {
    getTotalItemsInCart(shoppingCart);
  };

  // Event handler
  const handleOnSubmitCheckoutForm = () => {};

  // Fetches api products data
  useEffect(() => {
    axios
      .get(`https://codepath-store-api.herokuapp.com/store/`)
      .then((response) => {
        setProductList(response.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="app">
      <main>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <Home
                    products={productList}
                    searchValue={searchValue}
                    handleSearch={handleSearch}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemFromCart={handleRemoveItemFromCart}
                    // getQuantityOfItemInCart={getQuantityOfItemInCart}
                  />
                  <Sidebar
                    isOpen={isOpen}
                    shoppingCart={shoppingCart}
                    products={productList}
                    checkoutForm={checkoutForm}
                    handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                    handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                    handleOnToggle={handleOnToggle}
                    handleRemoveItemFromCart={handleRemoveItemFromCart}
                    handleAddItemToCart={handleAddItemToCart}
                    handleGetQuantityOfItemInCart={handleGetItemQuantity}
                    getTotalItemsInCart={handleGetTotalCartItems}
                  />
                </main>
              }
            />
            <Route
              path="/products/:productId"
              element={
                <main>
                  <Navbar />
                  <Sidebar
                    isOpen={isOpen}
                    shoppingCart={shoppingCart}
                    products={productList}
                    checkoutForm={checkoutForm}
                    handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                    handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                    handleOnToggle={handleOnToggle}
                    handleRemoveItemFromCart={handleRemoveItemFromCart}
                    handleAddItemToCart={handleAddItemToCart}
                    handleGetQuantityOfItemInCart={handleGetItemQuantity}
                    getTotalItemsInCart={handleGetTotalCartItems}
                  />
                  <Hero />
                  <SubNavbar
                    handleSearch={handleSearch}
                    searchValue={searchValue}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                  />
                  <ProductDetail
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemFromCart={handleRemoveItemFromCart}
                  />
                  <Footer />
                </main>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

  