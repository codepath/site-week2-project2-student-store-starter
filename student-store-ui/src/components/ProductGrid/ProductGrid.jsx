import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"
export default function ProductGrid({products = [], handleAddItemToCart, handleRemoveItemToCart, getQuantityItemInCart}) {
    return (
        <div id="Buy" className="product-grid">
            <div className="content">
                <h3>Best Selling Products</h3>
                <div className="grid">
                    {products.map((product) => (
                        <ProductCard product={product}
                        productId={product.id}
                        key={product.id}
                        quantity={getQuantityItemInCart}
                        handleAddItemToCart={() => handleAddItemToCart(product)}
                        handleRemoveItemToCart={() => handleRemoveItemToCart(product)}
                        />
                    ))}
                    { !products.length ? (
                        <div className="product-card">
                            <p>No products available at the moment.</p>
                        </div>
                    ) : null }
                </div>
            </div>
        </div>
    )
}