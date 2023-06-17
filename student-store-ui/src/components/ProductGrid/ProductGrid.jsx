import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductGrid.css'
import { Link } from 'react-router-dom'

function ProductGrid({products}) {
    return (
        <div className="product-grid">
            {products.map((product, idx) => 
                 <ProductCard className="product-card" product={product} key={idx}/> )
            }
      </div>
    )
}

export default ProductGrid
