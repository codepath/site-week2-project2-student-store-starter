import * as React from "react"
import {useState} from "react"
import {BrowserRouter} from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Logo from "../Logo/Logo"
import Sidebar from "../Sidebar/Sidebar"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import Home from "../Home/Home"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import ProductCard from "../ProductCard/ProductCard"
import ProductDetail from "../ProductDetail/ProductDetail"
import ProductView from "../ProductView/ProductView"
import "./App.css"

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar>
            <Logo/>
          </Navbar>
          <Sidebar>
            <ShoppingCart/>
            <CheckoutForm/>
          </Sidebar>
          <Home>
            <Hero/>
              <ProductGrid>
              </ProductGrid>
          </Home>
          <ProductDetail>
            <ProductView>
              <ProductCard/>
            </ProductView>
          </ProductDetail>
          <footer>
            
          </footer>
        </main>
      </BrowserRouter>
    </div>
  )
}
