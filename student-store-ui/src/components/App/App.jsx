import * as React from "react"
import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom"
import axios from "axios"
import Sidebar from "../Sidebar/Sidebar"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import ProductDetails from "../ProductDetails/ProductDetails"
import "./App.css"
import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"
import About from "../About/About"

const mockAPI = "https://codepath-store-api.herokuapp.com/store"

export default function App() {
  const [products, setProducts] = useState()

  useEffect(() => {
    axios.get(mockAPI)
      .then(response => {
        setProducts(response.data.products)
      })
  }, [])

  return (
    <BrowserRouter>
      <div className="app">
          <main>
            <Sidebar />
            <section className="page">
              <Navbar />
              <Hero />
              <div className="main-content">
                <Routes>
                  <Route path="/" element={<Home products={products} product/>} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                </Routes>
              </div>
              <Footer />
            </section>
          </main>
      </div>
    </BrowserRouter>
  )
}
