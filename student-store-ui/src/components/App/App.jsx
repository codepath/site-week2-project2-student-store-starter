import * as React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { useEffect, useState } from "react"
import axios from "axios"
import ProductDetail from "../ProductDetail/ProductDetail"



export default function App() {

  const url = "http://localhost:3001/";
  const [products, setProducts] = useState([]);
  const [sidebar, setSideBar] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]) //the array should have itemId and Quantity
  const [checkoutForm, setCheckoutForm] = useState({}); // user's information that will be sent to the API when they checkout
  const [error, setError] = useState("there has been an error"); //used to display message when something goes wrong with api requests

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (response.data.products.length > 0) {
          setProducts(response.data.products);
        } else {
          setError("No products found.");
        }
      })
      .catch((error) => {
        setError("Error occurred while fetching products.");
      });
  }, []);

  function handleAddItemToCart(productId) {
    setQuantity(quantity + 1);
  }
  
  function handleRemoveItemToCart(productId) {
    if (quantity > 0) {
       setQuantity(quantity - 1);
     }
  }

  function handleOnCheckoutFormChange(name,value) {
    setCheckoutForm(name, value) // is this correct? CHECK 
  }

  function handleOnSubmitCheckoutForm() { // IS THIS CORRECT?
    const order = {
      user: {
        name: checkoutForm.name,
        email: checkoutForm.email,
      },
      shoppingCart: shoppingCart.map((item) => ({
        itemId: item.itemId,
        quantity: item.quantity,
      })),
    };

    axios
      .post(url, order)
      .then((response) => {
        // Handle successful submission
      })
      .catch((error) => {
        // Handle error during submission
      });
  }




  return (

    <div className="app">
      <BrowserRouter>
        <main>

          <Navbar />
          <Sidebar isOpen={sidebar} handleOnToggle={() => setSideBar(!sidebar)} shoppingCart = {shoppingCart} products = {products} checkoutForm = {checkoutForm} handleOnCheckoutFormChange = {handleOnCheckoutFormChange} handleOnSubmitCheckoutForm = {handleOnSubmitCheckoutForm} />

          <Routes>
            <Route path="/" element={<Home products={products} setProducts={setProducts} handleAddItemToCart = {handleAddItemToCart} handleRemoveItemToCart = {handleRemoveItemToCart} shoppingCart = {shoppingCart} setShoppingCart = {setShoppingCart}/>} />
            <Route path="products/:id" element={<ProductDetail handleAddItemToCart = {handleAddItemToCart} handleRemoveItemToCart = {handleRemoveItemToCart}/>} />

          </Routes>


        </main>
      </BrowserRouter>
    </div>
  )
}
