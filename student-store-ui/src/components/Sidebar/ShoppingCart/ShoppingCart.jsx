import "./ShoppingCart.css"
// import Link from "react"
import { Link } from "react-router-dom"

export default function ShoppingCart({isOpen, products, shoppingCart}){
    function getName (id){
        for (let i = 0; i<products.length; i++){
            if (products[i].id == id){
                return products[i].name
            }
        }
    }

    function sumPrices(shoppingCart){
        let price = 0;
        let sum = 0;
        {shoppingCart.map(cart => {
            for (let i = 0; i<products.length; i++){
                if (products[i].id == cart.itemId){
                    price = products[i].price
                }
            }
            sum += (cart.quantity * price)
            
        })}
        return sum.toFixed(2)
        
    }
    
    return(
        
        <div className="shopping-cart">
            
            {shoppingCart.length == 0? 
            <h3 className="notification">"No items added to cart yet. Start shopping now!"</h3>
            :
            <div>
                <h1>Items in Cart</h1>

                {shoppingCart.map(cart => {
                    return(
                        <div className="cartResults">
                            <h3 className="cart-product-name">{getName(cart.itemId)}:</h3>
                            <h3 className="cart-product-quantity">{cart.quantity}</h3>
                        </div>
                    )
                })}
                <h3 className="subtotal">Subtotal: ${sumPrices(shoppingCart)}</h3>
                <h3 className="total-price">Total including tax: ${(sumPrices(shoppingCart) * 1.0875).toFixed(2)}</h3>
            
            </div>
            }

            
            
        </div>
    )
}