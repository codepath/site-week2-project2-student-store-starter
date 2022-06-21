import * as React from "react"
import "./ProductDetail.css"
import { useState, useEffect } from "react"
import { Routes, Route, useParams } from 'react-router-dom';
import Searchbar from "../Searchbar/Searchbar"
import Hero from "../Hero/Hero"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductDetail(props) {
  console.log(props)
  //states
  const [product, setProduct] = React.useState({});
  let {productId} = useParams(props.id);
  
  return (
    <div className="product-detail">
      <Hero />
      <Searchbar />
      <ProductCard className="productCardDetail" name={product.name}
      price={product.price} pic={product.image} showDescription={product.description}/>
    </div>
  )
}
