import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Logo from '../Logo/Logo';

import "./App.css"
import { useState, useEffect } from 'react';
import axios from "../../../api/axios";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";

export default function App() {
  const [products, setProducts] = useState('');
  //boolean value representing whether or not the App is currently fetching the products from the API
  const [isFetching, setIsFetching] = useState(false);
  //boolean value representing whether or not the SideBar is in open or closed state
  const [isOpen, setIsOpen] = useState(false);

  //store object {itemId , quantity}
  const [shoppingCart, setShoppingCart] = useState([]);

  const [category, setCategory] = useState("");
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  //search term
  const [searchTerm, setSearchTerm] = useState("");

  function handleOnTextChange(event) {
    setSearchTerm(event.target.value);
  }

  //checkout form
  const [checkoutForm, setCheckoutForm] = useState({ name: "", email: "" });

  const handleOnCheckoutFormChange = (nameV, valueV) => {
    setCheckoutForm(prev => ({
      ...prev, [nameV]: valueV
    }));
  }

  const handleOnSubmitCheckoutForm = async () => {
    //perform validation checking
    if (checkoutForm.name == "" || checkoutForm.email == "") {
      setError("User info must include an email and name.");
      return;
    }
    if (shoppingCart.length == 0) {
      setError("No cart or items in cart found to checkout.");
    }

    const newObject = {
      user: checkoutForm,
      shoppingCart: shoppingCart,
    }
    axios.post("/store", newObject)
      .then((res) => {
        setSuccess("Successful!");
      })
      .catch((err) => {
        setError("Failed to post data.");
      })

    setShoppingCart([]);
    setCheckoutForm({ name: "", email: "" });

  }
  //fetches once at the beginning - doesn't run an infinite loop
  //only run on render since we are passing an empty value
  useEffect(() => {
    setIsFetching(true);
    axios.get("/store")
      .then((res) => {
        //
        setProducts(res.data.products);
        setIsFetching(false);
      })
      .catch((err) => {
        setError("Failed to fetch data.");
      });
  }, []);


  //create 5 handlers to be passed as props to the Home and ProductDetail components
  function handleOnToggle() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  function handleAddItemToCart(productId) {
    const exists_index = shoppingCart.findIndex(product => product.itemId === productId);
    if (exists_index !== -1) {
      //product exists in shoppping cart
      const newCart = [...shoppingCart];
      newCart[exists_index].quantity += 1
      setShoppingCart(newCart);
    } else {
      const addItem = {
        itemId: productId,
        quantity: 1,
      };
      setShoppingCart([...shoppingCart, addItem]);
    }
  }

  function handleRemoveItemFromCart(productId) {
    const exists_index = shoppingCart.findIndex(product => product.itemId === productId);
    if (exists_index !== -1) {
      //product exists in shoppping cart
      const newCart = [...shoppingCart];
      newCart[exists_index].quantity -= 1;
      if (newCart[exists_index].quantity == 0) {
        //remove completely from shopping cart
        newCart.splice(exists_index, 1);
      }
      setShoppingCart(newCart);
    } else {
      return;
    }
  }

  return (
    <div className="app">
      <BrowserRouter>
        {isFetching ? (
          <h1 className="loading">"Loading..."</h1>
        ) : (
          <>
            <Navbar />
            <Sidebar isOpen={isOpen}
              shoppingCart={shoppingCart}
              handleOnToggle={handleOnToggle}
              products={products}
              checkoutForm={checkoutForm}
              handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
              handleOnCheckoutFormChange={handleOnCheckoutFormChange}
              error={error}
              success={success} />
            <Routes>
              <Route path="/" element={<Home
                allProducts={products}
                setCategory={setCategory}
                category={category}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleOnTextChange={handleOnTextChange}
                handleOnToggle={handleOnToggle}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
                shoppingCart={shoppingCart}
              />}></Route>
              {/* <Route path="products/:productId" element={ProductDetail}></Route> */}
              {/* <Route path="*" element={<NotFound />}></Route> */}
              <Route path="/products/:productId" element={<ProductDetail
                handleAddItemToCart={handleAddItemToCart}
                shoppingCart={shoppingCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart} />}>
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </>

        )}
      </BrowserRouter>
    </div>

  )
}
