import "./ProductDetail.css"
import { useState } from "react"
import {useParams} from "react-router-dom"
import NotFound from "../NotFound/NotFound"
import ProductCard from "../Home/ProductsGrid/ProductCard/ProductCard"
import ProductView from "./ProductView/ProductView"
const URL = 'https://codepath-store-api.herokuapp.com/store'

export default function ProductDetail(handleAddItemToCart, handleRemoveItemFromCart) {
    const [product, setProduct] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    
    const getData = async() => {
        const params = useParams()
        console.log('params: ', params);
        setIsLoading(true)
        try{
          const {data} = await axios.get(`https://codepath-store-api.herokuapp.com/store/{$params.productId}`);
          console.log('data: ', data);
          setProduct(data.product)
        }
        catch(err){
          setError(err)
        }
        if (products.length == 0){
          setError("no products")
        }
    }
    getData();
    setIsLoading(false);
    // axios.get(`URL/{$params.productId}`)
    // .then(resp => { setProducts(resp.data.products);
    // setIsLoading(false) })
    // .catch(function (error) {
    //   setError(error)
    // })

    if (product == null){
        <NotFound/>
    }
    <ProductView product = {product}
     productId ={productId} handleAddItemToCart = {handleAddItemToCart} 
     handleRemoveItemFromCart = {handleRemoveItemFromCart} quantity = {quantity} />
    
    
    return(
        <div className="product-detail">
            {isLoading? <h1 className = "loading">Loading...</h1>: null}
        </div>
    )
    
}