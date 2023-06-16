import * as React from "react"
import "./ProductDetails.css"
import axios from "axios"
import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'

export default function ProductDetails() {

    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(()=> {
        axios.get(`https://codepath-store-api.herokuapp.com/store/${id}`)
        .then(response => {
            // console.log(response.data.product)
            setProduct(response.data.product)
        });
    },[]);


  return (
    <div className="productdetails">
        <h1>Product # {product.id}</h1>
        <img src={product.image} alt={product.name + 'img'}/>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
    </div>
  )
}