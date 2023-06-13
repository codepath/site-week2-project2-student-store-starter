import * as React from "react"
import axios from 'axios'

import { BrowserRouter } from 'react-router-dom'
import { useEffect, useState } from "react"

import "./App.css"

import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Hero from "../Hero/Hero"


export default function App() {

  const url = 'https://codepath-store-api.herokuapp.com/store'

  const [products, setProducts] = useState()

  useEffect (() => {
    axios.get(url).then((response) => {
      console.log(response.data.products)
      setProducts(response.data.products)
    })
  }, [])

  const [isActive, setIsActive] = useState(false)

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar 
            handleClick={() => setIsActive(!isActive)}
            isActive ={isActive} // not sure what to put here
          />
          <Hero />
          <Home products={products}/>
        </main>
      </BrowserRouter>
    </div>
  )
}
