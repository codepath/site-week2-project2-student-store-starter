import "./ProductView.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductView(props) {
    return (
        <div className="product-view">
            <ProductCard class="product-card-extended" shoppingCart={props.shoppingCart} setShoppingCart={props.setShoppingCart} product={props.product}/>
        </div>
    )
}