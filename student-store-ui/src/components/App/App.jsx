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

const mockBackend = "https://codepath-store-api.herokuapp.com/store"

export default function App() {
  const [products, setProducts] = useState()
  const [product, setProduct] = useState({})

  const { id } = useParams()

  useEffect(() => {
    axios.get(mockBackend)
      .then(response => {
        setProducts(response.data.products)
      })
  }, [])

  // useEffect(() => {
  //   axios.get(`mockBackend/${id}`)
  //     .then(response => {
  //       setProduct(response.data.product)
  //     })
  // }, [])

  console.log(product)

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
                  {/* <Route path="/product/:id" element={<ProductDetails product={product} />} /> */}
                </Routes>
              </div>
              <Footer />
            </section>
          </main>
      </div>
    </BrowserRouter>
  )
}
