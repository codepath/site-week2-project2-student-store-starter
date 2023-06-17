import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductView.css'

function ProductView({product, productId, quantity, handleAddItemToCart, handleRemoveFromCart}) {
    return (
        <div className='product-view'>
            <h1> Product #{productId}</h1>
            {/* <h3> {product.name} </h3> */}

            <ProductCard className= 'card-in-view' product= {product} showDescription={true}/>
            {/* <img src={product?.image}/> */}

            {/* <p>
                
                {product?.description}
            </p> */}
        </div>
    )
}

export default ProductView
