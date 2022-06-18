import * as React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Home from '../Home/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import api from '../api/api'
import ProductDetail from '../ProductDetail/ProductDetail'
import axios from 'axios'
export default function App() {

  const [products, setProducts] = React.useState([])
  
  const [isFetching, setisFetching] = React.useState(true)
  
  const [error, seterror] = React.useState("")
  
  const [isOpen, setisOpen] = React.useState(false)
  
  const [shoppingCart, setshoppingCart] = React.useState("")



  
  React.useEffect(() => {
    axios.get("https://codepath-store-api.herokuapp.com/store/").then(function (response) {
      
        setProducts(response.data.products);
        setisFetching(false);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  },[products]);
  
  


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Routes>
          
           {/*
           condition ? exprIfTrue : exprIfFalse*/ }
              {isFetching ? (
      ""
      ) : (
         <Route path='/' element={<Home  products={products} />} 
            />
      )}
            
                   
          <Route path='/products/:productId' element={<ProductDetail products={products.products}   />} />
                
            
           
'
           
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
