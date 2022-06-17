import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import axios from "axios"
import { useState, useEffect } from "react"


let shoppingCartObject = {
  itemId: 0,
  quantity: 0
}

export default function App() {
  const [products, setProducts] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  const [error, setError] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [shoppingCart, setShoppingCart] = React.useState([shoppingCartObject]);
  const [checkoutForm, submitCheckoutForm] = React.useState({});
  useEffect(() => {
    // Update the document title using the browser API

    const fetchProducts = async() => {
      setIsFetching(true)
      try {
        const startingProducts = await axios.get("https://codepath-store-api.herokuapp.com/store")
        setProducts(startingProducts.data.products)
        console.log(products)
        //console.log(startingProducts.data.products)
      } catch (error) {
        console.log(error)
        setError(error)
      }
      finally{
        setIsFetching(false)
      }
    }
    fetchProducts()
  },[])

  const handleOnToggle = () => {
    if(isOpen == false){
      setIsOpen(true)
    }
    else{
      setIsOpen(false)
    }
   }
   const handleAddItemToCart = (productId) => {
    shoppingCart.map((id) => {
      if (id.itemId != productId){
        id.quantity = 1
      } else{
        id.quantity++;
      }
      //products.map((item) => {
        //if (item == id.itemId){
          //totalPrice += item.price * id.quantity;
          //console.log("total Price:" + totalPrice);
        //}
      //})
    })
  }

  const handleRemoveItemFromCart = (productId) => {
    setShoppingCart(shoppingCart.map((id,i) => {
      if (productId == id.itemId){
        id.quantity--;
      }
      if (id.quantity == 0) {
        delete shoppingCart[i];
      }
    }));
  }
  const handleOnCheckoutFormChange = (name, value) => {
    setCheckoutForm({name, value});
  }
  const handleOnSubmitCheckoutForm = () => {
    axios.post("https://codepath-store-api.herokuapp.com/store",{
      user:{name: checkoutForm.name, email: checkoutForm.value}, shoppingCart
    })
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {
            <Routes>
              <Route path="/" element={(
                <>
                  <Navbar />
                  <Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>
                  <Sidebar />
                </>
              )}   
              />
              <Route path="/products/:productsId" element={(
                <>
                  <Navbar />
                  <ProductDetail products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>
                  <Sidebar />
                </>
              )}   
              />
              <Route path="*" element={(
                <>
                  <Navbar />
                  <NotFound />
                  <Sidebar />
                </>
              )}   
              />
            </Routes>
          }
        </main>
      </BrowserRouter>
    </div>
  )
}
