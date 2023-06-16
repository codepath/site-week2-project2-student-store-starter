import * as React from "react"
import "./ProductDetails.css"
import {useEffect, useState} from "react"
import NotFound from "../NotFound/NotFound"
import {useParams} from "react-router-dom"
import PropTypes from "prop-types"

export default function ProductDetails(){
    const { id } = useParams();
    const [products, setProducts] = useState({})
    const productsUrl = "https://codepath-store-api.herokuapp.com/store/${id}"

    useEffect(() => {
        axios.get("https://codepath-store-api.herokuapp.com/store/${id}").then((response) =>{
          setProducts(response.data.products)
          // console.log(response.data.products) // getting the food items
          // console.log(products)
        })
    
      }, []);

    //   function renderDetails(){
        // if (!products) {return <h1 classNae ="loading" > Loading...</h1>} // undefined products array
        // if (products === -1){
        //     return NotFound
        // } else {
    {console.log("REACHED THE PAGE!!")}
    return {
        // <h1> HELLO </h1>

    }
        // }

    //   }

}