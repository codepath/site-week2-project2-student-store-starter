import './ProductView.css';
import ProductCard from '../ProductCard/ProductCard';

export default function ProductView({ shoppingCart, product, productId, handleAddItemToCart, handleRemoveItemFromCart }) {
    //

    return (
        <div className="product-view">
            <h1 className="product-id">{`Product #${productId}`}</h1>
            <ProductCard product={product} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} shoppingCart={shoppingCart} showDescription={true} />
        </div>
    )
}