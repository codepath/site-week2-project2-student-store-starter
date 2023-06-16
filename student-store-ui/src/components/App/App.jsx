import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import Hero from "../Hero/Hero"
import Sub_Navbar from "../Sub_Navbar/Sub_Navbar"

// import { useEffect } from "react"
// import axios from 'axios'

export default function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Hero />
          <Sub_Navbar />
          <Sidebar />
          <Home />
        </main>
      </BrowserRouter>
    </div>
  )
}
