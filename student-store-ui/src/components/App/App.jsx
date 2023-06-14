import * as React from "react"
import axios from 'axios'
import { BrowserRouter, Route} from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import { useState } from "react"
import { useEffect } from "react"
import "./App.css"


export default function App() {
  //Url for API
  const url = "https://codepath-store-api.herokuapp.com/store"
  //useState
  const[products, setProducts] = useState();
  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products)
    })
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar />
          <Home products = {products}/>
        </main>
      </BrowserRouter>
    </div>
  )
}
