import * as React from "react"
import {BrowserRouter} from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductGrid from "../ProductGrid/ProductGrid";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import "./App.css"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export default function App() {
  const [products, setProductStat] = useState([]);
  const [isFetching, setFetchingStat] = useState(false);
  const [isOpen, setOpenStat] = useState(false);
  const [shoppingCart, setShoppingCartStat] = useState([]);
  const [error, setErrorStat] = useState("");
  const URL = "https://codepath-store-api.herokuapp.com/store";
  // useEffect( async() => {
  //   const productsRes = await axios
  //   .get(`https://codepath-store-api.herokuapp.com/store`)
  //   .then((res) => {
  //     setProductStat(res.data);
  //     console.log(products);
  //   })
  //   .catch((err) => console.error(err));
  // });
  useEffect(async()  => {
    const {data} = await axios(URL)
    setProductStat(data.products)
    // console.log("products: ", data.products)
  })
  // fetchProducts();

  function handleOnToggle(){
    setOpenStat(!isOpen);
  };
  function handleItemToCart(productId){
    // TODO: It should add that product to the shoppingCart if 
    // it doesn't exist, and set its quantity to 1.
    //  It should add the price of the product to the total 
    // price of the shoppingCart.
  };
  function handleRemoveItemToCart(productId){
    //TODO
  };
  function handleOnCheckoutFormChange(name, value){
    //TODO: It should update the checkoutForm object 
    // with the new value from the correct input(s)
  };
  function handleOnSubmitCheckoutForm(){};

  return (
    <div className="app">
      <BrowserRouter>

        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Home />
          <ProductGrid products={products} handleAddItemsToCart ={handleItemToCart} handleRemoveItemToCart= {handleRemoveItemToCart}/>
          <About />
          <Contact />
          <Footer />

        </main>
      </BrowserRouter>
    </div>
  )
};
