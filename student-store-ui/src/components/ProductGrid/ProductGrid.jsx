import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductGrid.css'

function ProductGrid({products}) {
    return (
        <div className="product-grid">
            {products.map((product, idx) => 
                <ProductCard product={product} key={idx}/>)
            }
      </div>
    )
}

export default ProductGrid
