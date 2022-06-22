import * as React from "react"
import axios from "axios"
import { BrowserRouter } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"

const API_URL = "https://codepath-store-api.herokuapp.com/store"
const response = await axios.get(API_URL)
const products = response.data.products

console.log(products)

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Home />
        </main>
      </BrowserRouter>
    </div>
  )
}
