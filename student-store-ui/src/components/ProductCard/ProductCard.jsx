import * as React from "react"

export default function ProductCard({product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription}) {
  return (
    <div className="product-card">
        <p className="product-name">{product.name}</p>
        <p className="product-price">`${product.price}`</p>
        {showDescription} && <p className="product-description">{product.description}</p>
        <div className="media">
            <Link to={`/products/${product.id}`}>
                <img src={product.image}/>
            </Link>
        </div>
        <button className="add" onClick={handleAddItemToCart(productId)}></button>
        <button className="remove" onClick={handleRemoveItemToCart(productId)}></button>
        {quantity > 0} && <p className="product-quantity">{quantity}</p>
    </div>
  )
}
