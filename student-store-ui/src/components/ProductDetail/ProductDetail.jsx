import React from 'react'

function ProductDetail({product, handleAddItemToCart, handleRemoveItemToCart}) {
    return (
        <div className='product-detail'>
            {product.name}
        </div>
    )
}

export default ProductDetail
