import React from 'react'
import "./ShoppingCart.css"

const ShoppingCart = ({isOpen, products, shoppingCart}) => {

    const subtotal = shoppingCart
    .reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
    .toFixed(2);

    const open = (
        <>
            <h2 className='shopping-cart-title'>Shopping Cart</h2>
            {shoppingCart.length === 0 ? 
                <p>No items to add yet. Start shopping now!</p> :
                <div>
                    {shoppingCart.map(product => (
                        <React.Fragment key={product.id}>
                            <p className='cart-product-name'>{product.name}</p>
                            <p className='cart-product-quantity'>{product.quantity}</p>
                        </React.Fragment>
                    ))}
                    <p className='subtotal'>{`Subtotal:  $${subtotal}`}</p>
                    <p className="total-heading">Total (8.75% TAX):</p>${(subtotal * 1.0875).toFixed(2)}</div>
            }
        </>
    )

    const close = (
        <>
            <p className='notification'>No items added to cart yet. Start shopping now!</p>
        </>
    )

  return (
    <div className='shopping-cart'>
        {isOpen ? open : close}
    </div>
  )
}

export default ShoppingCart