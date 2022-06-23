import "./ProductDetail.css"
import { useState } from "react"
import {useParams} from "react-router-dom"

export default function ProductDetail(handleAddItemToCart, handleRemoveItemFromCart) {
    const [product, setProduct] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()
    axios.get(`URL/{$params.productId}`)
    .then(resp => { setProducts(resp.data.products);
    setIsLoading(false) })
    .catch(function (error) {
      setError(error)
    })
    
    
    return(
        <div className="product-detail">
            {isLoading? <h1 className = "loading">Loading...</h1>: null}
        </div>
    )
    
}