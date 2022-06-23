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

  const [error, seterror] = React.useState('')

  const [isOpen, setisOpen] = React.useState(false)

  const [shoppingCart, setshoppingCart] = React.useState([])

  


  const handleRemoveItemFromCart = (productID) => {
    var value = shoppingCart.find((element) => {
      if (element.itemId == productID) {
        return true
      }
    })
    if (value != undefined) {
      console.log("hey")
      shoppingCart.map((element) => {
        if (element.itemId == productID) {
          if (element['quantity'] > 0)
          {
            element['quantity'] = element['quantity'] - 1
            
           
          }
           if (element['quantity'] <= 0)
            {
              shoppingCart.pop(element)
            }
        
         
        }
      
 
      })
     
     
    } 
           else {
          console.log("massa")
      
      }
  }




  const handleAddItemToCart = (productID) => {
    var value = shoppingCart.find((element) => {
      if (element.itemId == productID) {
        return true
      }
    })
    if (value == undefined) {
      shoppingCart.push({ itemId: productID, quantity: 1 })
      console.log('create')
    } else {
      shoppingCart.map((element) => {
        if (element.itemId == productID) {
          element['quantity'] = element['quantity'] + 1
        }
      })
    }
  }

  const handleOnToggle = (isOpen) => {
    setisOpen(!isOpen)
  }

  React.useEffect(() => {
    axios
      .get('http://localhost:3001/store/')
      .then(function (response) {
        setProducts(response.data.products)
        setisFetching(false)
      })
      .catch(function (error) {
        console.log(error.message)
      })
  }, [products])

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar
            isOpen={isOpen}
            setisOpen={setisOpen}
            handleOnToggle={handleOnToggle}
            products={products}
            shoppingCart={shoppingCart}
            setshoppingCart={setshoppingCart}
          />
          <Routes>
            {isFetching ? (
              ''
            ) : (
              <Route
                path="/"
                element={
                  <Home
                    products={products}
                    shoppingCart={shoppingCart}
                    setshoppingCart={setshoppingCart}
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemFromCart={handleRemoveItemFromCart}
                  />
                }
              />
            )}
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  products={products.products}
                  shoppingCart={shoppingCart}
                  setshoppingCart={setshoppingCart}
                  handleAddItemToCart={handleAddItemToCart}
                />
              }
            />
            '
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
