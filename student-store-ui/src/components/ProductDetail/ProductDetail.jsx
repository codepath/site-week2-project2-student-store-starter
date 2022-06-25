import * as React from "react"
import "./ProductDetail.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import NotFound from "../NotFound/NotFound"
import ProductView from "./ProductView"


export default function ProductDetail({handleAddItemToCart, handleRemoveItemFromCart, shoppingCart}) {

  const [product, updateProduct] = useState({})
  const [isLoading, updateIsLoading] = useState(false)
  console.log(useParams())
  const {productId} = useParams()
  const URL = 'https://codepath-store-api.herokuapp.com/store/'

  function findQuantity(){
    let quantity = 0
        for(let productInCart of shoppingCart){
          if(productInCart.productId === product.id){
            quantity = productInCart.quantity 
            break
          }
        }
        return quantity
      }
  useEffect(() => {

    async function fetchData() {
    updateIsLoading(true)

      await axios(URL+productId).then(function({data}){
        if(data.product){
          updateProduct(data.product)
        }else{
          updateError("Failed to get data: Products is empty")
        }
      })
      .catch(function(error){
        updateError(error)
      })
    updateIsLoading(false)
    }
    
    fetchData();

  }, [name])


  let quantity = findQuantity()
  return (
    <div className="product-detail">
    {isLoading              ? <p>Loading...</p> : 
    productId == product.id ? <ProductView product={product} productId={productId}  quantity = {quantity} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} />:
                              <NotFound /> 

    }
    </div>
  )
}