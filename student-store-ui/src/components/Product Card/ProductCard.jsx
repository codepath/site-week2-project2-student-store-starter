import React from 'react'
import "./ProductCard.css"

const ProductCard = ({product}) => {
  return (
    <div className='product-card'>
        <h3>{product.name}</h3>
        <img src={product.image} alt={product.name} />
    </div>
  )
}

export default ProductCard