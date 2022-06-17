import "./ProductView.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductView(props) {
    return (
        <div className="product-view">
            <ProductCard class="product-card-extended" product={props.product}/>
        </div>
    )
}