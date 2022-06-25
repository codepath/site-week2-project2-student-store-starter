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

  function onAddClickHandler(productId) {
    let product = shoppingCart.find((product) => product['id'] === productId)
    if (product) {
      let newItemCount = product['count'] + 1
      let restShoppingCart = shoppingCart.filter((product) => product.id != productId)
      setShoppingCart([].concat(restShoppingCart, [{'id': productId, 'count': newItemCount}]))
    } else {
      setShoppingCart([].concat(shoppingCart, [{'id': productId, 'count': 1}]))
    }
  }

  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
            <Route path="/" element=
              {
              <Home products={ products } categories={ categories } setProducts={ setProducts } allProducts = { allProducts }
               onAddClickHandler={ onAddClickHandler }/>
              } 
            />
            <Route path="products/:productId" element={<ProductDetail allProducts={ allProducts } />} />
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
