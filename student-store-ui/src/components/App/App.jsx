import * as React from "react"
import axios from "axios"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import Home from "../Home/Home"
import "./App.css"

const API_URL = "https://codepath-store-api.herokuapp.com/store"

export default function App() {
  // an array of product objects that is initially empty.
  const [products, setProducts] = React.useState([])
  const [allProducts, setAllProducts] = React.useState([])
  // a boolean value representing whether or not the App is currently fetching the products from the API.
  const [isFetching, setIsFetching] = React.useState(true)
  // a variable used to display a message when something goes wrong with the API requests.
  const [error, setError] = React.useState("")
  // a boolean value representing whether or not the Sidebar.jsx is in the open or closed state.
  const [isOpen, setIsOpen] = React.useState(false)
  // should store state for the active user's shopping cart (items they want to purchase and the quantity of each item).
  const [shoppingCart, setShoppingCart] = React.useState([])
  // the user's information that will be sent to the API when they checkout.
  const [checkoutForm, setCheckoutForm] = React.useState(false)
  // set active category
  const [activeCategory, setActiveCategory] = React.useState('All categories')

  const categories = ['All categories', 'Clothing', 'Food', 'Accessories', 'Tech']

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL)
        if (isFetching) {
          setProducts(response.data.products)
          setAllProducts(response.data.products)
          setIsFetching(false)
        }
      } catch(e) {
        setError(e)
      }
    }

    fetchData()
  }, [])

  function handleOnToggle() {
    setIsOpen(!isOpen)
  }
  
  function handleAddItemToCart(productId) {
    if (productId in shoppingCart) {
      let new_count = shoppingCart[productId] + 1
      shoppingCart[productId] = new_count

    } else {
      setShoppingCart(shoppingCart + [{productId: 1}])
    }
  }

  function onClickCategory(e) {
    e.preventDefault()
    set
    setProducts(products.filter((product) => {}))
  }


  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
            <Route path="/" element=
              {
              <Home products={ products } categories={ categories } setActiveCategory={ setActiveCategory }
              activeCategory={ activeCategory } setProducts={ setProducts } 
              allProducts = { allProducts }/>
              } 
            />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
      </Routes>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
        </main>
      </BrowserRouter>
    </div>
  )
}
