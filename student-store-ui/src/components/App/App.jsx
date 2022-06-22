import * as React from "react"
import axios from "axios"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import Home from "../Home/Home"
import "./App.css"

const API_URL = "https://codepath-store-api.herokuapp.com/store"
const response = await axios.get(API_URL)
const products = response.data.products

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
      </Routes>
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
