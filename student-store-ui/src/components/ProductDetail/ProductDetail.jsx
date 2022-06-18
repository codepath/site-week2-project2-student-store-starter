import { useParams } from "react-router-dom"
import "./ProductDetail.css"

import NotFound from "../NotFound/NotFound"
import ProductView from "../ProductView/ProductView"

export default function ProductDetail(props) {
    const {productId} = useParams();

    //search for product based on ID
    const product = props.products.filter((e) => e.id == productId)

    return(
        // if the length of our ID is greater than the array, return NotFound component
        productId < props.products.length ? 
        <div className="product-detail">
            <ProductView shoppingCart={props.shoppingCart} setShoppingCart={props.setShoppingCart} product={product[0]}/>
        </div> 
        :
        <NotFound/>
    )
}

