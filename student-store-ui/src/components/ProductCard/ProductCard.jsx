import React from 'react'
import './ProductCard.css'

function ProductCard({product, showDescription}) {
    return (
        <div className='product-card'>
            <div className="product-cont"> 
                <img src={product.image}/> 
                <p className="prod-name"> {product.name} </p>
                <p className="prod-price"> {`$ ${product.price}`} </p>
                <div className='buttons'>
                    <button> + </button>
                    <button> - </button>
                </div>
                
            </div>
        </div>
        
    )
}

export default ProductCard


