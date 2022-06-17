import * as React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Home from '../Home/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import api from '../api/api'
import ProductDetail from '../ProductDetail/ProductDetail'
export default function App() {

  const [products, setProducts] = React.useState([])
  
  const [isFetching, setisFetcing] = React.useState(false)
  
  const [error, seterror] = React.useState("")
  
  const [isOpen, setisOpen] = React.useState(false)
  
  const [shoppingCart, setshoppingCart] = React.useState("")


  React.useEffect(() => {
    const fetchpost = async () => {
      try {
        const response = await api.get()
        setProducts(response.data)
        setisFetcing(true)
      }
      catch (err)
      {
        if (err.response)
        {
             seterror(err.response.data)
        }
        else {
          seterror(err.message)
        }
     
      }
    }
    fetchpost()
  }, [])
  

  
  


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home  products={products.products} />} 
            />
            <Route path='/products/:productId' element={<ProductDetail error={ error} isFetching={isFetching}  />} />
'
           
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
