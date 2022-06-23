import React from 'react'

const ProductGrid = ({products, handdleAddItemToCart}) => {
  return (
    <div className='product-grid' id='Buy'>
      <div className='product-grid-title'>
        <h2>Selling products</h2>
      </div>
      <div className='product-grid-container'>
        {products.map((product, index) => (
          <React.Fragment key={index}>
            {console.log(product.name)}
            <h2>{product.name}</h2>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default ProductGrid