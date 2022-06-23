import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductsGrid from "../ProductsGrid/ProductsGrid"
import Footer from "../Footer/Footer"
import HeaderNav from "../HeaderNav/HeaderNav"
import HeroBanner from "../HeroBanner/HeroBanner"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import Search from "../Search/Search"
import "./App.css"
import { useState } from 'react';
import { BrowserRouter, Link, Routes, Route} from "react-router-dom";
import axios from "axios";


export default function App() {
  const [products, setProducts] = useState([])
  const [errors, setError] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [shoppingCart, setShoppingCart] = useState([])
  let handleOnToggle = () => {
    console.log("shopping cart has been pressed")
    setIsOpen(true)
    console.log(isOpen)
  }
  
  // console.log("These are the products" + products)
  // products.map((item) => {
  //   ({item-id: item.id, quantity: 0})
  //   console.log({"item id": item.id, "quantity": 0})
    
  // })
  // console.log("This is the shopping cart")
  // console.log(shoppingCart.length)

  let handleAddItemToCart = (id) => {
    let cartCopy = [...shoppingCart]
    for (let i = 0; i < shoppingCart.length; i++) {
        if (id == item-id) {
          console.log("hey")

        }
    }
    //loop over copy, if == update item, if it doesn't exist add new item
    //update clone, set shopping clone
    //shoppingCart
    
  }
  let handleRemoveItemFromCart = (id) => {
    
  }
   

  React.useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get('http://localhost:3001/store');
        const data = response.data.products
        setProducts(data)
      } catch (error) {
        console.error("An error occured")
        setError(error)
      }
      
    }
    getProducts();

  }, [])
  console.log(products)
  console.log(errors)
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <img className="cart"alt="image of shopping cart" src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-png-image-download-pngm-2.png" onClick={handleOnToggle}/>
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} products={products} handleOnToggle={handleOnToggle}/>
          
          
          <div className="welcome">
            <h1>
              Welcome to the Student Store!
              Find your merch down below!
            </h1>
            {/*<img src="https://live.staticflickr.com/3932/14910658133_5f4337c82b_w.jpg" alt="image of college logo"/>
          */}</div>
          <br/>
          

          
          <Routes>
            <Route path ="/products/:productId" element = {<ProductDetail/>}/>
            <Route path ="/" element = {<Home products={products} setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>}/>
            <Route path ="*" element = {<NotFound/>}/>
          </Routes>
          <br/>
          <div className="about">
            <h2 className= "about-text">
              The codepath student store offers great products at great prices from a great team and for a great cause.

              We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.

              All proceeds go towards bringing high quality CS education to college students around the country.
            </h2>
            </div>
          <br/>
          <div className="contact-us">
            <h2>
              Email:    code@path.org
            </h2>
            <h2>
              Phone:    1-800-CODEPATH
            </h2>
            <h2>
              Address:    123 Fake Street, San Francisco, CA
            </h2>
          </div>



        </main>
      </BrowserRouter>
    </div>
  )
}
