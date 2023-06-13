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

  // useEffect(() => {
  //   axios.get(mockBackend)
  //     .then(response => {
  //       setProducts(response.data.products)
  //     })
  // }, [products])

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
            <Subnavbar />
            <Home />
          </section>
        </main>
      </BrowserRouter>
    </div>
  )
}
