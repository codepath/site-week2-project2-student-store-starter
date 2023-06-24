import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"

export default function App() {

  // Global States
  const url = 'http://localhost:3001'
  const [itemList, itemListSet] = React.useState(null)
  const [productCart, productCartSet] = React.useState(new Map())

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar itemList={itemList} productCart={productCart} productCartSet={productCartSet} url={url}/>
          <Home itemList={itemList} itemListSet={itemListSet} productCart={productCart} productCartSet={productCartSet} url={url}/>
        </main>
      </BrowserRouter>
    </div>
  )
}
