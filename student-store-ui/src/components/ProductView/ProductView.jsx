import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

function ProductView({product, productId, quantity, handleAddItemToCart, handleRemoveFromCart}) {
    return (
        <div className='product-view'>
            <h1> Product #{productId}</h1>
            <ProductCard showDescription={true}/>
        </div>
    )
}

export default ProductView
