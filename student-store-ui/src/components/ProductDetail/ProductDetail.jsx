import * as React from "react"
import "./ProductDetail.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import NotFound from "../NotFound/NotFound"
import ProductView from "../ProductView/ProductView"
import Loading from "../Loading/Loading"

export default function ProductDetail(props) {
  const [currentProduct, setCurrentProduct] = useState(null)  
  const productId = useParams();

  let apiUrl = "http://localhost:3001/store/" + productId.productId
  console.log(productId.productId)
  console.log(apiUrl)

  let invalidId = (productId.productId < 0 || productId.productId > props.products.length )



  useEffect(() => {
    const getProduct = async () => {
      props.setIsFetching(true)
      try {
        const response = await axios.get(apiUrl)
        if (response.data.product) {
          setCurrentProduct(response.data.product)
        } else {
          setError("Error getting product list from store.")
        }
      } catch (error) {
        console.log(error)
      } finally {
        props.setIsFetching(false)
      }
    }
    getProduct()
  }, [])
  console.log(123, currentProduct)

    return (        
      
    <div className = "product-detail">


      {currentProduct != null ? (<ProductView product = {currentProduct} />) : invalidId ? (<NotFound />) : (<Loading/>)}

        
    </div>

  )
}