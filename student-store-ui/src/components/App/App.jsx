import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./App.css"

import Sidebar from "../Sidebar/Sidebar"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import ProductDetails from "../ProductDetails/ProductDetails"
import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"

export default function App() {
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
                  <Route path="/" element={<Home />} />
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
