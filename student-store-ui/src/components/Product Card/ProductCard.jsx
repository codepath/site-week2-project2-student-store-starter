import React from 'react'
import "./ProductCard.css"
import ProductDetail from '../ProductDetail/ProductDetail'

const ProductCard = ({product, shoppingCart, quantity, handleAddItemToCart, handleRemoveItemFromCart}) => {
    return (
        <div className='product-card'>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <hr />
            <p>{`$ ${product.price}`}</p>
            <hr />
            <ProductDetail 
                product={product}
                shoppingCart={shoppingCart}
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