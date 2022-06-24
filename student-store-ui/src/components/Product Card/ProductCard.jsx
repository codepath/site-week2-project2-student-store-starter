import React from 'react'
import "./ProductCard.css"
import ProductDetail from '../ProductDetail/ProductDetail'

const ProductCard = ({product, quantity, handleAddItemToCart, handleRemoveItemFromCart}) => {
    return (
        <div className='product-card'>
            <img src={product.image} alt={product.name} />
            <h3 className='product-name'>{product.name}</h3>
            <hr />
            <p className='product-price'>{`$${product.price.toFixed(2)}`}</p>
            <hr />
            <ProductDetail 
                product={product}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
                />
            {quantity > 0 && (
                <div
                title={`You have ${quantity} ${product.name} in your shopping cart!`}
                className="product-quantity"
                >
                {`- ${quantity} -`}
                </div>
            )}
        </div>
    )
}

export default ProductCard