import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import ProductView from '../ProductView/ProductView'
import './ProductDetail.css'

function ProductDetail({quantities, setQuantities}) {
    const {id} = useParams()
    console.log({id})
    const url= 'https://codepath-store-api.herokuapp.com/store'
    const newUrl= 'http://localhost:3001/store'

    const [prod, setProd]= useState({})



    useEffect(()=> {
        axios.get(`${newUrl}/${id}`).then((response) => {
          setProd(response.data)
        })
      }, [])
      
    return (
        <div className='product-detail'>
            
            <ProductView product={prod} productId={id} quantities={quantities} setQuantities={setQuantities}/>
        </div>
    )
}

export default ProductDetail
