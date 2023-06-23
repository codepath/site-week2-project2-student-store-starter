import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductGrid.css'
import { Link } from 'react-router-dom'

function ProductGrid({cart, setCart, products, quantities, setQuantities}) {
    return (
        <div className="product-grid">
            {products.map((product, idx) => 
                 <ProductCard cart={cart}  setCart={setCart} className="product-card" product={product} key={idx} quantities={quantities} setQuantities={setQuantities}/> )
            }
      </div>
    )
}

export default ProductGrid
