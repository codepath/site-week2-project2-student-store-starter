import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css"

export default function ProductGrid({ products, handleAddItemToCart, shoppingCart, handleRemoveItemFromCart }) {

    if (products.length > 0) {
        return (
            <div id="Buy" className="product-grid">
                <div className="content">
                    <h3>Best Selling Products</h3>
                    <div className="grid">
                        {products.map((product, index) => (
                                <ProductCard product={product} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} shoppingCart={shoppingCart} showDescription={false}/>
                        ))}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <h3>Currently No Products</h3>
        )
    }
}