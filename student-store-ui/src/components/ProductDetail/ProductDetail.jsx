import React from 'react'
import "./ProductDetail.css"
import { ProductView } from '../ProductView/ProductView'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const ProductDetail = ({handleAddItemToCart, handleRemoveItemToCart}) => {
  const[product, setProduct] = useState('')
  let {productId} = useParams()

  useEffect(() => {
    axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`).then(res => {
      setProduct(res.data.product)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className='product-detail'>
      {product !== '' ? <ProductView product={product} productId={productId}/> : null}
    </div>
  )
}
