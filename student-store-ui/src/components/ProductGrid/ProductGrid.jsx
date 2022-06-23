import React from 'react'
import ProductCard from '../Product Card/ProductCard'
import "./ProductGrid.css"

const ProductGrid = ({products, handdleAddItemToCart}) => {
  return (
    <div className='product-grid' id='Buy'>
      <div className='product-grid-title'>
        <h2>Selling products</h2>
      </div>
      <div className='product-grid-container'>
        {products.map((product, index) => (
          <React.Fragment key={index}>
            <ProductCard 
              product={product}
              />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default ProductGrid