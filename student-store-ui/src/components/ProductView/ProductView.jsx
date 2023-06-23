import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductView.css'

function ProductView({product, productId, quantities, setQuantities}) {
    return (
        <div className='product-view'>
            <h1> Product #{productId}</h1>
            <ProductCard className= 'card-in-view' product= {product} showDescription={true} quantities={quantities} setQuantities={setQuantities}/>
            
        </div>
    )
}

export default ProductView
