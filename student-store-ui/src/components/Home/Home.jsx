import * as React from "react"
import "./Home.css"
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
// import About from "../About"
import {useEffect, useState} from "react"
import { Link } from 'react-router-dom'
import Hero from '../Hero/Hero'
import SubnavBar from "../SubnavBar/SubnavBar"
import About from "../About/About"
import Contact from '../Contact/Contact'
import ProductGrid from '../ProductGrid/ProductGrid'

// export default function Home({products, formData, handleInput, changeCategory, handleSubmit, quantity}) {
export default function Home({products, formData, handleInput, changeCategory}) {
    return (

    // <SubnavBar/>

    <div className="home">
      <SubnavBar formData={formData} handleInput={handleInput} changeCategory={changeCategory} />
      {/* <p>Home</p> */}
      <Hero />
      {/* <ProductGrid products = {products} quantity={quantity}/> */}
      <ProductGrid products = {products}/>
      <About />
      <Contact />

    {/* <Outlet/> */}

   </div>
  )
}