import React from 'react'
import './Receipt.css'

function Receipt({cart,setQuantities, setCart, originalProducts, setAtCheckout, name, email, atCheckout}) {
    console.log('re',cart)

    const quantsObj= {}
    for (const product of originalProducts){
    quantsObj[product.id]= 0
    }

    console.log('qo', quantsObj)

    function clearCart(){
        setQuantities(quantsObj)
        setCart([])
        setAtCheckout(false)
    }
    // console.log('re', quantities)
    return (
        <div className='checkout'>
            <h3> Receipt </h3>
            <p> Showing receipt for {name} available at {email}: </p>
            <ul>
            {
            cart.map((prodInCart) => {
                // console.log('pic', prodInCart)
                const product = originalProducts.find((product) => parseInt(product.id) === prodInCart.itemId)
                // console.log('p',product)
                return (
                    <li key={prodInCart.itemId}> 
                        {prodInCart.quantity} total {product.name} at a cost of
                        ${product.price.toFixed(2)} for a total of ${(product.price*prodInCart.quantity).toFixed(2)} 
                    </li>
                ) 
            })
            }      
            </ul>
                
        <button onClick={clearCart}>
            Clear Cart
        </button>
                
        </div>
    )
}

export default Receipt
