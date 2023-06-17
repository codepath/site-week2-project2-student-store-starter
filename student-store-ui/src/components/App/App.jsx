import * as React from "react"
import axios from 'axios'
import { useEffect, useState } from "react"
import Home from "../Home/Home"
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetails from "../ProductDetails/ProductDetails"



export default function App() {
const url = "https://codepath-store-api.herokuapp.com/store";
const [products, setProducts] = useState([]);
const [searchValue, setSearchValue] = useState('')
const [searchCatValue, setSearchCatValue] = useState('')
const [catValue, setCatValue] = useState('')



  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products)
    });
  }, []);

  return (
    <>
    <div className="app">
      <BrowserRouter>
        <main>
        <Routes>
          <Route path="" element={<Home products={products}
           searchValue={searchValue}
        setSearchValue={setSearchValue}
        setSearchCatValue={setSearchCatValue}
        setCatValue={setCatValue}
        catValue={catValue}
        searchCatValue={searchCatValue}
        />}/>
      <Route path="products/:id" element={<ProductDetails products={products}/>}/>
      </Routes>
        </main>
      </BrowserRouter>
    </div>
    </>
  )
}


