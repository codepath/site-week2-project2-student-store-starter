import "./ProductView.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductView({product, productId, handleAddItemToCart, handleRemoveItemFromCart}) {
    return (
        <div className="product-view">
            <h1 className="product-id">Product #{productId}</h1>
            <div className="product-view-card">
                <ProductCard product={product} productId={productId} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} />
            </div>
        </div>
    )
}