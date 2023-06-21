import * as React from "react"
import axios from 'axios'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import { useState } from "react"
import { useEffect } from "react"
import "./App.css"
import Productfacts from "../Productdetails/Productdetails"
//MOST STYLING WAS DONE IN APP.CSS

export default function App() {

  //Shopping cart useState
  const[ShoppingList, SetShoppingList] = useState([])

  //Url for API
  const url = "https://codepath-store-api.herokuapp.com/store"

  //useState
  const[products, setProducts] = useState();

  //Fetching Data
  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products)
    })
  }, [])

//Calling function order
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path = "" element = {<main>
          <Navbar />
          <Sidebar />
          <Home products={products} ShoppingList= {ShoppingList} SetShoppingList={SetShoppingList}/>
          </main>}/>
          <Route path="products/:id" element={<Productfacts/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}