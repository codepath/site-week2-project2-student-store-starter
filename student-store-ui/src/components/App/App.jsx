import * as React from "react"
import { useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import axios from "axios"
import Sidebar from "../Sidebar/Sidebar"
import Navbar from "../Navbar/Navbar"
import Subnavbar from "../Subnavbar/Subnavbar"
import Home from "../Home/Home"
import "./App.css"

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
            <section className="footer">
              <div className="footer-category">
                footer categories and such
              </div>
            </section>
          </section>
        </main>
      </BrowserRouter>
    </div>
  )
}
