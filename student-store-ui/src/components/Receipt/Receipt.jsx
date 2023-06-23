import React from 'react'

function Receipt({shoppingCart, setCart, originalProducts, name, email}) {
    console.log(shoppingCart)

    // function clearCart(){
    //     setCart({})
    // }

    return (
        <div className='checkout'>
            <h3> Receipt </h3>
            <p> Showing receipt for {name} available at {email}: </p>
            <ul>
            {shoppingCart.map((prodInCart) => {
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
                
        {/* <button onClick={clearCart}>
            Clear Cart
        </button> */}
                
        </div>
    )
}

export default Receipt
