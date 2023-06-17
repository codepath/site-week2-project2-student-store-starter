import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import ProductView from '../ProductView/ProductView'

function ProductDetail() {
    const {id} = useParams()
    console.log({id})
    const url= 'https://codepath-store-api.herokuapp.com/store'
    const [prod, setProd]= useState({})



    useEffect(()=> {
        axios.get(`${url}/${id}`).then((response) => {
          setProd(response.data.product)
          console.log('here',response.data.product)
        })
      }, [])
      
    return (
        <div className='product-detail'>
            
            <ProductView product={prod} productId={id}/>
        </div>
    )
}

export default ProductDetail
