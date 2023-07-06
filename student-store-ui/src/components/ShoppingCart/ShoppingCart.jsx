import React, {useEffect, useState} from "react"
import ShopIcon from "remixicon-react/ShoppingBag2LineIcon"
import CashSign from "remixicon-react/MoneyDollarBoxFillIcon"
import "./ShoppinCart.css";



function ShoppingCart({setCheckout,email, setEmail, setName, name, quantities, originalProducts, subtotal, taxes, total }) {
    let filterdata = quantities.filter(([id, quantity]) => quantity > 0)


    function handleName(event){
        setName(event.target.value)
    }

    function handleEmail(event){
        setEmail(event.target.value)
    }
    function handleSubmit(e){
         e.preventDefault() 
         setCheckout(true)
    }

    return (
        <div>
            <span>
                <ShopIcon />
            </span>
            <h1 className="header">
                Shopping Cart
            </h1>

            { 
                
                filterdata.length === 0 ? (<p className="text"> No items added to cart yet. Start shopping now!</p>) : (
                    <>  <div class="header-row">
                        <span class="flex-2">Name</span>
                        <span class="center">Quantity</span>
                        <span class="center">Unit Price</span>
                        <span class="center">Cost</span>
                    </div>

                        {filterdata.map(([id, quantity]) => {
                            const product = originalProducts.find(product => product.id === id)

                            return (
                                <>
                                    <div class="header-row">
                                        <span class="flex-2">{product.name}</span>
                                        <span class="center">{quantity}</span>
                                        <span class="center">${product.price.toFixed(2)}</span>
                                        <span class="center">${(quantity * product.price).toFixed(2)}</span>
                                    </div>
                                </>
                            )
                        })}
                        <div className="subtotal">
                                        <p>Subtotal <span>${subtotal.toFixed(2)}</span></p>
                                        <p>Taxes <span>${taxes.toFixed(2)}</span></p>
                                        <p>Total <span>${total.toFixed(2)}</span></p>

                                    </div>
                    </>

                )}

            <h3 className="h3">
                Payment Info
            </h3>
            <form action="search">
                <label className="form-label" htmlFor="name"> Name </label>
                <input className="form-input" value={name} onChange={handleName} name="student-name" placeholder="Student Name" /><br></br>

                <label className="form-label" htmlFor="email"> E-mail </label>
                <input className="form-input" value={email} onChange={handleEmail} name="email" placeholder="student@slay.org" /><br></br>
                <button className="button" onClick={handleSubmit}>Checkout</button>
            </form>


            <h3 className="h-3">
                Checkout Info
            </h3>
        </div>
    )
}

export default ShoppingCart