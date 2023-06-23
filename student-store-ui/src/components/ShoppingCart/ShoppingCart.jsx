import { useState } from 'react'
import CheckoutInfo from '../CheckoutInfo/CheckoutInfo'
import './ShoppingCart.css'

export default function ShoppingCart({ cart, setCart }) {
    const [isCheckOpen, setIsCheckOpen] = useState(false)

    const handleClick = () => {
        if (!isCheckOpen) {
            setIsCheckOpen(true)
        } else {
            setCart([])
        }
    }
  
    const checkoutClass = isCheckOpen ? "checkout open" : "checkout closed"
    if (cart.length > 0) {
        let subtotal = 0
        cart.forEach(item => {
            subtotal += Number(item.price) * Number(item.quantity)
        })
        return (
            <>
                <section className="cart-table">
                    <div className="table-labels">
                        <p><b>Name</b></p>
                        <div className="right-side">
                            <p><b>Quantity</b></p>
                            <p><b>Unit Price</b></p>
                            <p><b>Cost</b></p>
                        </div>
                    </div>
                    <hr width="100%"></hr>
                    {cart?.map((item) => (  
                        <div className="table-row">
                            <p>{item.name}:</p>
                            <div className="right-side">
                                <p>{item.quantity}</p>
                                <p>${item.price}</p>
                                <p>${ (Number(item.price) * Number(item.quantity)).toFixed(2) }</p>
                            </div>
                        </div>
                    ))}
                    <hr width="100%"></hr>
                    <div className="table-totals">
                        <div className="table-row">
                            <p><b>Subtotal:</b></p>
                            <p><b>${ subtotal.toFixed(2) }</b></p>
                        </div>
                        <div className="table-row">
                            <p><b>Taxes & Fees:</b></p>
                            <p><b>${ (subtotal * 0.08).toFixed(2) }</b></p>
                        </div>
                        <div className="table-row">
                            <p><b>Total: </b></p>
                            <p><b>${ (subtotal * 1.08).toFixed(2) }</b></p>
                        </div>
                    </div>
                </section>
                <button onClick={handleClick} className="checkout-button">Checkout</button>
                <div className={checkoutClass}>
                    <CheckoutInfo cart={cart} />
                </div>
            </>
        )
    } else {
        return <p><b>You have no items in your cart!</b></p>
    }
}