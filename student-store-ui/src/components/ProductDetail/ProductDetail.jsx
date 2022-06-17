import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api/api'
import ProductView from '../ProductView/ProductView'


export default function ProductDetail() {
  const [currentProduct, setcurrentProduct] = React.useState(null)

  const productID = useParams()
  console.log(productID)
  let api_URL =
        'https://codepath-store-api.herokuapp.com/store/' + productID.productId
    
    
      React.useEffect(() => {
    const fetchpost = async () => {
      try {
          const response = await api.get(`/${productID.productId}`)
          if (response.data)
          {
               setcurrentProduct(response.data.product)
          }
         
      }
      catch (err)
      {
        if (err.response)
        {
        
        }
        else {
          seterror(err.message)
        }
     
      }
    }
    fetchpost()
      }, [])
    
    

  React.useEffect(() => {
    const getProduct = async () => {
      try {
          const response = await api.get(`/${productID.productId}`)
         
          if (response.data.product)
          {
              setcurrentProduct(response.data.product)
              console.log(currentProduct.currentProduct)
              
          }
      } catch (err) {
        console.log(err)
      }
      }
      getProduct()
  }, [])
    

    return( <div className="product-detail">
        <ProductView currentProduct={currentProduct} />
         </div>
        )
   
}
