import * as React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Hero from "../Hero/Hero"
import SubNavbar from "../SubNavbar/SubNavbar"
import ProductDetail from "../ProductDetail/ProductDetail"
import { useEffect, useState } from "react"
import axios from 'axios'
import "./App.css"

export default function App() {
  const url = "https://codepath-store-api.herokuapp.com/store"
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("")
  const [cart, setCart] = useState([])
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products)
    })
  }, [])

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category ? product.category === category : true)
  )

  return (
    <div className="app">
      <BrowserRouter>
      <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />
        <div className="main-content">
          <main>
            <Navbar />
            <Hero />
            <SubNavbar setCategory={setCategory} setSearchTerm={setSearchTerm} />
            <Routes>
              <Route path="/" element={<Home 
                      products={filteredProducts}
                      cart={cart}
                      setCart={setCart}
              />} />
              <Route path="/product/:id" element={<ProductDetail products={products} />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  )

}