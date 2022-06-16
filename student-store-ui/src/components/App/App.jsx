import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import axios from "axios"
import "./App.css"

export default function App() {
  const [products, setProducts] = React.useState([])
  const [isFetching, setIsFetching] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [isOpen, setIsOpen] = React.useState(false)
  const [shoppingCart, setShoppingCart] = React.useState([]) //objects need itemId and quantity
  const [totalPrice, setTotalPrice] = React.useState(0)
  const [checkoutForm, setCheckoutForm] = React.useState({
    name: "",
    email: ""
  })

  const handleOnToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  const handleAddItemToCart = (productId) => {
    let itemIndex = shoppingCart.findIndex((obj => obj.itemId == productId))
    if (itemIndex === -1) {
      setShoppingCart((oldShoppingCart) => [...oldShoppingCart, {itemId: productId, quantity: 1}])
    } else {
      setShoppingCart((oldShoppingCart) => (oldShoppingCart[itemIndex].quantity++))
    }
  }

  const handleRemoveItemFromCart = (productId) => {
    let itemIndex = shoppingCart.findIndex((obj => obj.itemId == productId))
    if (itemIndex !== -1) {
      setShoppingCart((oldShoppingCart) => {
        oldShoppingCart[itemIndex].quantity--
        if (oldShoppingCart[itemIndex].quantity === 0) {
          oldShoppingCart.splice(itemIndex, 1)
        }
        return oldShoppingCart
      })
    } 
  }

  const handleOnCheckoutFormChange = (name, value) => {
    setCheckoutForm((oldCheckoutForm) => (oldCheckoutForm[name]= value))
  }

  React.useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3001/store")
        const products = res.data //maybe need to add question mark
        if (products) {
          setProducts(products)
          console.log(products)
        }
        else {
          setError(new Error("No Products returned!"))
          console.log("nothing")
        }
      } catch(err) {
        setError(err)
      }
    }
    getProducts()

  }, [])
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Routes>
            <Route exact path="/" element={ <Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} shoppingCart={shoppingCart}/>} />
            {/* <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />}/> */}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}


