import "./App.css"

import axios from "axios"
import React, {useState, useEffect} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "../Home/Home"
import Navbar from "../Navbar/Navbar"
import NotFound from "../NotFound/NotFound"
import ProductDetail from "../Product/Detail/ProductDetail"
import Sidebar from "../Sidebar/Sidebar"


export default function App() {
    //  sends user's info to the API when checking out
    const [checkoutForm, setCheckoutForm] = useState({name: "", email: ""})
    //  displays a message when something goes wrong with API requests
    const [error, setError] = useState()
    //  boolean state representing whether or not App is currently fetching products
    const [isFetching, setIsFetching] = useState()
    //  boolean state representing whether or not Sidebar is opened/closed
    const [isOpen, setIsOpen] = useState(false)
    //  array of products, always initially empty
    const [products, setProducts] = useState([])
    //  state for active user's shopping cart: an array of items they wish to purchase & quantity of each item
    const [shoppingCart, setShoppingCart] = useState([])


    //  displays the products stored in the /store endpoint using axios.get
    useEffect(() => {
      setIsFetching(false)
      const getProducts = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/store`)
          const products = response?.data?.products
          setIsFetching(true)
          setProducts(products)
        } catch(error) {
          setError("Couldn't find that item.")
          setIsFetching(false)
        }
      }
      getProducts()
      setIsFetching(false)
    }, [])


    //  handles open/closed state of Sidebar
    function handleOnToggle() {
      if (isOpen) {
        setIsOpen(false)
      } else {
        setIsOpen(true)
      }
    }


    //  adds product to shoppingCart & adds its price to the total price 
    function handleAddItemToCart(productId) {
      shoppingCart.find((item) => {
        if (item.itemId === productId) {
          const existingItem = {itemId: item.itemId, quantity: item.quantity + 1}
          setShoppingCart(existingItem)
        } else {
          const newItem = {itemId: productId, quantity: 1}
          setShoppingCart(newItem)
        }
      })
    }


    //  removes product from shoppingCart & subtract its price from the total price
    function handleRemoveItemFromCart(productId) {
      let currentCart = shoppingCart
      shoppingCart.find((item) => {
        if (item.itemId === productId && item.quantity > 0) {
          const existingItem = {itemId: item.itemId, quantity: item.quantity - 1}
          setShoppingCart(existingItem)
        } else if (item.itemId === productId && item.quantity == 0) {
          shoppingCart.pop(item)
        } else {
          return currentCart
        }
      })
    }


    //  updates the checkoutForm object w/ new inputs
    function handleOnCheckoutFormChange() {
      setCheckoutForm({...checkoutForm, [name]: value})
    }


    //  submits user's order to the API using axios.post to the /store endpoint
    async function handleOnSubmitCheckoutForm() {
      try {
        const res = await axios.post(`http://localhost:3001/store`, {user: checkoutForm, shoppingCart: shoppingCart})
        if (res.data.purchase) {
          setPurchases(current => [...current, res.data.purchase])
          setShoppingCart([])
        }      
      } catch(error) {

      }

      setShoppingCart([])
    }



    return (
      <div className = "app">
        <BrowserRouter> 

          <main>
            <Navbar/>
            <Sidebar
                isOpen = {isOpen}
                shoppingCart = {shoppingCart}
                products = {products}
                checkoutForm = {checkoutForm}
                setCheckoutForm = {setCheckoutForm}
                handleOnCheckoutFormChange = {handleOnCheckoutFormChange}
                handleOnSubmitCheckoutForm = {handleOnSubmitCheckoutForm}
                handleOnToggle = {handleOnToggle}
            />

            <Routes>
              <Route path = "*" element = {<NotFound/>}/>
              <Route path = "/" element = {
                <Home
                    products = {products} 
                    shoppingCart = {shoppingCart}
                    handleAddItemToCart = {handleAddItemToCart} 
                    handleRemoveItemFromCart = {handleRemoveItemFromCart}
                />}
              />
              <Route path = "/products/:productId" element = {
                <ProductDetail
                    shoppingCart = {shoppingCart}
                    handleAddItemToCart = {handleAddItemToCart} 
                    handleRemoveItemFromCart = {handleRemoveItemFromCart}
                />}
              />
            </Routes>
          </main>
          
        </BrowserRouter>
      </div>
    )

}