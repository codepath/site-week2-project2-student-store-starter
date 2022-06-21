import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Footer from "../Footer/Footer"
import ProductDetail from "../ProductDetail/ProductDetail"
import SubNavbar from "../SubNavbar/SubNavbar"
import "./App.css"
import { BrowserRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react'
import axios from 'axios';

/* An array of product objects that is initially empty.
const [products, setProducts] = useState([])

// A boolean value representing whether or not the App is currently fetching the products from the API.
const [isFetching, setIsFetching] = useState(false)

// A variable used to display a message when something goes wrong with the API requests.
const [error, setError] = useState("")

// A boolean value representing whether or not the Sidebar.jsx is in the open or closed state.
const [isOpen, setIsOpen] = useState(false)

// Should store state for the active user's shopping cart (items they want to purchase and the quantity of each item)
// When passed down to other components as a prop, it should formatted as an array of objects.
const [shoppingCart, setShoppingCart] = useState([])

// The user's information that will be sent to the API when they checkout.
const [checkoutForm, setCheckoutForm] = useState("") */


export default function App() {



// An array of product objects that is initially empty.
const [products, setProducts] = useState([])

// A boolean value representing whether or not the App is currently fetching the products from the API.
const [isFetching, setIsFetching] = useState(false)

// A variable used to display a message when something goes wrong with the API requests.
const [error, setError] = useState("")

// A boolean value representing whether or not the Sidebar.jsx is in the open or closed state.
const [isOpen, setIsOpen] = useState(false)

// Should store state for the active user's shopping cart (items they want to purchase and the quantity of each item)
// When passed down to other components as a prop, it should formatted as an array of objects.
const [shoppingCart, setShoppingCart] = useState([])

// The user's information that will be sent to the API when they checkout.
const [checkoutForm, setCheckoutForm] = useState("") 

const [searchFormContent, setSearchFormContent] = useState("");

const [selectedCategory, setSelectedCategory] = useState("all")

const [selectedProductId, setSelectedProductId] = useState(0)



// API Call
const getData = async () => {
  const { data } = await axios.get(`https://codepath-store-api.herokuapp.com/store`);
  console.log(data.products.length)
  console.log(data.products);

  if (data.products.length > 0) {
    console.log("Set the data!")
    setProducts(data.products);
  }
  else {
    setError("API call failure!")
  }
};

useEffect(() => {
  getData();
}, []);


// Toggle the open/closed state of the sidebar
function handleOnToggle() {
  if (isOpen == false) {
    setIsOpen(true);
  }
  else {
    setIsOpen(false);
  }
}

function handleAddItemToCart(productId) {
  // If shoppingcart contains the element with the given id
  if (shoppingCart.filter(item => item.id === {productId}).length > 0) {
    // setShoppingCart(...) Use the ... to add it without deleting everything prior
  }
}

function handleRemoveItemFromCart(productId) {
  // If shoppingcart contains the element with the given id
  if (shoppingCart.filter(item => item.id === {productId}).length > 0) {
    
  }
}

function handleOnCheckoutFormchange(name, value) {

}

function handleOnSubmitCheckoutForm() {

}


// Create and pass onchange function to search bar

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar> {/* All routes*/}
           
          </Navbar>
            
          <Sidebar handleOnToggle={() => handleOnToggle}> {/* All routes */}
  
          </Sidebar>

          <Routes>


   
            <Route 
            path="/" 
            element={<Home 
              products={products} 
              setProducts={setProducts}
              handleAddItemToCart={handleAddItemToCart} 
              handleRemoveItemFromCart={handleRemoveItemFromCart}
              searchFormContent={searchFormContent} 
              setSearchFormContent={setSearchFormContent}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedProductId={selectedProductId}
              setSelectedProductId={setSelectedProductId}
              />}
            ></Route>

            
      

            <Route
            path="/products/:productId"
            element={<ProductDetail 
              selectedProductId={selectedProductId}
              products={products}
            ></ProductDetail>} />

            {/* All other routes that don't match */}
            <Route 
              path="*" 
              render={() => <NotFound /* possible prop injection */ />}
            />
          </Routes>



          

        </main>
      </BrowserRouter>
    </div>
  )
}
