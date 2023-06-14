import * as React from "react"
import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"
import Sidebar from "../Sidebar/Sidebar"
import Navbar from "../Navbar/Navbar"
import Subnavbar from "../Subnavbar/Subnavbar"
import Home from "../Home/Home"
import "./App.css"
import About from "../About/About"
import Footer from "../Footer/Footer"

const mockBackend = "https://codepath-store-api.herokuapp.com/store"

export default function App() {

  const [products, setProducts] = useState()
  const [category, setCategory] = useState("All Categories")
  const [page, setPage] = useState("buy")

  const categories = ["All Categories", "Food", "Clothing", "Tech", "Accessories"]

  useEffect(() => {
    axios.get(mockBackend)
      .then(response => {
        setProducts(response.data.products)
      })
  }, [category])

  return (
    <div className="app">
      <BrowserRouter>
        {/*<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
  </Routes>
  
  <Link to="/home">  Home </Link>
  */}
        <main>
          <Sidebar />
          <section className="page">
            <Navbar />
            <div className="hero">
              <h1>Header</h1>
            </div>
            <div className="main-content">
              <Subnavbar 
                categories={categories}
                category={category}
                setCategory={setCategory}/>
              <Home 
                category={category}
                products={products} 
              />
            </div>
            <Footer />
          </section>
        </main>
      </BrowserRouter>
    </div>
  )
}
