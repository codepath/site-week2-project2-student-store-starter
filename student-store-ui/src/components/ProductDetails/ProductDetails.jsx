import * as React from "react"
import "./ProductDetails.css"
import axios from "axios"
import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'

export default function ProductDetails({count, setCount, handleAdd, handleMinus}) {

    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(()=> {
        axios.get(`http://localhost:3001/store/products/${id}`)
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

         <div className="actions">

                <div className="buttons" >
                    <button className="add" onClick={(e)=>handleAdd(e, product.id, product)}>
                        <i className="material-icons">add</i>
                    </button>
                    <button className="remove" onClick={(e) => handleMinus(e,product.id, product)}>
                        <i className="material-icons">remove</i>
                    </button>
                </div>

                { count[product.id] ?
                <span className="quantity">
                <span className="amt">{count[product.id]}</span>
                </span> 
                :
                <></>
                }
             
            </div>

    </div>
  )
}