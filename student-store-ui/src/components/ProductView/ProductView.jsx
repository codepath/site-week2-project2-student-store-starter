import * as React from "react"
import "./ProductView.css"
import {useEffect, useState} from "react"

import {useParams} from "react-router-dom"
import ProductCard from '../ProductCard/ProductCard'

export default function ProductView() {
    console.log("REACHED NEW PAGE!")
    // console.log(newProducts);
    const { id } = useParams();
    console.log(id);
    const [product, setProduct] = useState({})
    const productUrl = "https://codepath-store-api.herokuapp.com/store/" + `${id}`

    useEffect(() => {
        axios.get(productUrl).then((response) =>{
            setProduct(response.data.product)
          // console.log(response.data.product) // getting the food item
          // console.log(product)
        })
    
      }, []);
return(
    <>
        <img> style={{width: "200px"}} src={product.image}</img>
        <p> {product.description} </p>
    </>  

    // //   function renderDetails(){
    //     // if (!products) {return <h1 classNae ="loading" > Loading...</h1>} // undefined products array
    //     // if (products === -1){
    //     //     return <NotFound/>
    //     // } else {
    // {console.log("REACHED THE PAGE!!")}
)
}