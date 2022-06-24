import * as React from "react"
import "./ProductDetail.css"
import ProductCard from "../ProductCard/ProductCard";
import ProductView from "../ProductView/ProductView";
import { useState } from "react"
import { useEffect } from "react"
import { Routes, Route, useParams } from 'react-router-dom';
import axios from "axios";
export default function ProductDetail( handleAddItemsToCart, handleRemoveItemToCart) {
    const [currProduct, setCurrProd] = useState("");
    const [loading, setLoading] = useState(true);
    const quantity = 1;
    let {productId} = useParams();
    const URL = "https://codepath-store-api.herokuapp.com/store/";
    // useEffect(async()  => {
    //     console.log('param: ' + productId);

    //     const response = await axios(`URL${productId}`)
    //     // .get(`/store/`)
    //     .catch(function(error){
    //         console.log("error: ", error)
    //         setLoading(true)
    //     })
    //     console.log("data: ", response)
    //     setCurrProd(response.data.product)
    //     setLoading(false)
    //     // console.log("products: ", data.products)
    //   })

    useEffect(async()  => {
        axios 
        .get(`https://codepath-store-api.herokuapp.com/store/${productId}`)
        .then(function(response) {
        setCurrProd(response.data.product)
        setLoading(false)
        // console.log("products: ", data.products)
        })
        .catch(function(error){
            console.log("error: ", error)
            setLoading(true)
        })
      }, [])
  return (
        <div className="product-detail">
            {/* {loading != true && currProduct != null
                ? <ProductCard product={product} productId={product.id} 
                quantity={product.quantity} handleAddItemsToCart ={handleAddItemsToCart} handleRemoveItemToCart={handleRemoveItemToCart} showDescription={true}/>

                :<div className="loading">
                    <h1> Loading ...</h1>
                </div>
                
            } */}
            <ProductCard product={currProduct} productId={currProduct.id} 
                quantity={currProduct.quantity} handleAddItemsToCart ={handleAddItemsToCart} handleRemoveItemToCart={handleRemoveItemToCart} showDescription={true}/>
            
        </div>
  )}