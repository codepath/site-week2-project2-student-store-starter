import React from 'react'

function ShoppingCart({productsInCart}) {
    
    return (
        <div className='shopping-cart'>
            {productsInCart.map((product)=> 
            { 
                return (<img src={product.images}/>)
            }
            )}
        </div>
    )
}

export default ShoppingCart
