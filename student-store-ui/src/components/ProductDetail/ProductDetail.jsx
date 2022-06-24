// import * as React from "react"
// import {useParams} from "react-router-dom"
// import "./ProductDetail.css"

// export default function ProjectDetail(props) {
//     const {productId} = useParams()
//     const thisProduct = props.products.find(prod => prod.id == productId)
//     return (
//         <div className="product-detail">
//             <img className="modal-image" src={thisProduct.image} alt="Product cover" />
//             <h1>Name:{thisProduct.name}</h1>
//             <p>Category: {thisProduct.category}</p>
//             <p>{thisProduct.description}</p>
//             <p>Price: ${thisProduct.price}</p>
//         </div>
//     )
// }

import * as React from "react"
import "./ProductDetail.css"
import ProductView from "../ProductView/ProductView"
import NotFound from "../NotFound/NotFound"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function ProductDetail(props) {
    console.log(props)
    const [product, setProduct] = React.useState(null)
    let args = useParams()
    React.useEffect(() => {        
        const getProduct = async () => {
            props.setIsFetching(true)
        try {
            // const res = await axios.get("http://localhost:3001/store")
            const res = await axios.get(`https://codepath-store-api.herokuapp.com/store/${args.productId}`)
            const data = res.data //maybe need to add question mark
            if (data) {
            setProduct(data.product)
            }
            else {
            props.setError("Cannot fetch products.")
            }
        } catch(err) {
            props.setError(err)
        } finally {
            props.setIsFetching(false)
        }
        }
        getProduct()
    
    }, [])
    if(props.isFetching) return (
        <h1 className="loading">
        Loading...
        </h1>
    )
    return (
        <div className="product-detail">
            <div className="content">
                {product ? <ProductView product={product}  handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} shoppingCart={props.shoppingCart}/> : <NotFound/>}
            </div>
        </div>
        
    )
}