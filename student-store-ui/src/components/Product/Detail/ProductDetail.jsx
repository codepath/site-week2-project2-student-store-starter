import "./ProductDetail.css"

import axios from "axios"
import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

import NotFound from "../../NotFound/NotFound"
// import ProductView from "../ProductView/ProductView"


export default function ProductDetail(props) {
    //   extracts productId from URL
    let {productId} = useParams()
    //  boolean state representing whether or not GET request is loading
    const [loading, setIsLoading] = useState(true)
    //  array of products, always initially empty
    const [product, setProduct] = useState([])


    //   fetches a single product
    useEffect(() => {
    const getProduct = async () => {
    try {
        const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`)
        const productData = response.data
        setProduct(productData.product)
        } catch(error) {
            return <NotFound/>
        }
    }

    getProduct()  
    }, [])



    return (
        <div className = "product-detail">
            <h1> Testing... </h1>
        {/* {loading ? 
            <h1 className = "loading"> Loading... </h1>  :
            <ProductView
                product = {product}
                shoppingCart = {props.shoppingCart}
                quantity = {props.shoppingCart.quantity}
                productId = {productId}
                handleAddItemToCart = {props.handleAddItemToCart}
                handleRemoveItemFromCart = {props.handleRemoveItemFromCart}
            />
        } */}
        </div>
    )
  }