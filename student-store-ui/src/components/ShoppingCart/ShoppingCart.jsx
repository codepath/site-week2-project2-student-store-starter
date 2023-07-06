import * as React from "react"
import "./ShoppingCart.css"
import { useState } from "react";
import Receipt from "../Receipt/Receipt";


export default function ShoppingCart({handleClick, shoppingCart, setShoppingCart, count, setCount}) {


    const [checkoutName, setCheckoutName] = useState('');
    const [checkoutEmail, setCheckoutEmail] = useState('');
    const [checkoutProducts, setCheckoutProducts] = useState([]);
    const [inputError, setInputError] = useState('');

    const calculateTaxes = (subtotal) => {
        // Replace this with your tax calculation logic
        const taxRate = 0.1; // Assuming a tax rate of 10%
        const taxes = subtotal * taxRate;
        return taxes;
      };
      
      // Function to calculate total
      const calculateTotal = (subtotal, taxes) => {
        const total = subtotal + taxes;
        return total;
      };

      const handleSubmit = (e) => {
        e.preventDefault()

        if (shoppingCart.length===0){ 
            setInputError('Your shopping cart is empty. Add some products before checking out.')
        } else if ( !e.target.name.value || !e.target.email.value){
            setInputError('User info must include an email and name')
        }else{
            
                // transfer items to checkout state before clearing
                setCheckoutProducts(shoppingCart);

                const name = e.target.name.value;
                const email = e.target.email.value;
                setCheckoutEmail(email);
                setCheckoutName(name);
                
                // clearing states
                setInputError('');
                e.target.name.value = '';
                e.target.email.value = '';
                setShoppingCart([]);
                setCount({});
        }
        
      }
    return (

            <div className="wrapper">
            <button className="toggle-button button open" onClick={handleClick}>
                <i className="material-icons md-48">arrow_backward</i>
            </button>

                <div className="shopping-cart">
                <div className="open">
                    <h3 className="">Shopping Cart <span className="button">
                    <i className="material-icons md-48">add_shopping_cart</i>
                    </span>
                    </h3>

                    {shoppingCart.length > 0?
                    // cart with items
                    <div className="CartTable">
                        <div className="header">
                        <div className="header-row">
                            <span className="flex-2">Name</span>
                            <span className="center">Quantity</span>
                            <span className="center">Unit Price</span>
                            <span className="center">Cost</span>
                        </div>
                        {shoppingCart?.map(item =>{ 

                            const subtotal = (item.price * item.quantity).toFixed(2);

                            return (
                        <div className="product-row">
                            <span className="flex-2 cart-product-name">{item.name}</span>
                            <span className="center cart-product-quantity">{item.quantity}</span>
                            <span className="center cart-product-price">${item.price}</span>
                            <span className="center cart-product-subtotal">${subtotal}</span>
                        </div>
                            )
                        })}
                        </div>

                        <div className="receipt">
                        <div className="receipt-subtotal">
                            <span className="label">Subtotal</span>
                            <span></span>
                            <span></span>
                            <span className="center subtotal">${shoppingCart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
                        </div>

                        <div className="receipt-taxes">
                            <span className="label">Taxes and Fees</span>
                            <span></span>
                            <span></span>
                            <span className="center">${calculateTaxes(
                shoppingCart.reduce((acc, item) => acc + item.price * item.quantity, 0)
                ).toFixed(2)}</span>
                        </div>
                        <div className="receipt-total">
                            <span className="label">Total</span>
                            <span></span>
                            <span></span>
                            <span className="center total-price">${calculateTotal(
                shoppingCart.reduce((acc, item) => acc + item.price * item.quantity, 0),
                calculateTaxes(shoppingCart.reduce((acc, item) => acc + item.price * item.quantity, 0))
                ).toFixed(2)}</span>
                        </div>
                        </div>
                    </div>
                    // cart without items
                    :
                    <div className="notification">No items added to cart yet. Start shopping now!</div>
                    }
                    <form className="checkout-form" onSubmit={handleSubmit}>
                    <h3 className="">Payment Info <span className="button"><i className="material-icons md-48">monetization_on</i></span>
                    </h3>
                    
                    <div className="input-field">
                        <label className="label">Name</label>
                        
                        <div className="control ">
                        <input id="name" name="name" className="checkout-form-input" type="text" placeholder="Student Name"/>
                        </div>
                    </div>
                    
                    <div className="input-field">
                        <label className="label">Email</label>
                        <div className="control">
                        <input id="email" name="email" className="checkout-form-input" type="email" placeholder="student@codepath.org"/>
                        </div>
                    </div>

                    
                    <p className="is-danger"></p>
                    
                    <div className="field">
                        <div className="control">
                        <button className="button checkout-button" type="submit">Checkout</button>
                        </div>
                    </div>
                    </form>

                    {inputError ? 
                        <p className="error-message" style={ {color: "#e93535",
                                                              backgroundColor: "white",
                                                              fontStyle: 'bold',
                                                              margin: "10px 70px 10px 70px",
                                                              borderRadius:'7px',
                                                              padding:'10px'}}>{inputError}</p>
                        
                    :
                        <></>
                    }

                    
                    {checkoutEmail && checkoutName ?

                    <Receipt 
                        shoppingCart={shoppingCart}
                        setShoppingCart={setShoppingCart}
                        checkoutName={checkoutName} 
                        checkoutEmail={checkoutEmail} 
                        calculateTaxes={calculateTaxes} 
                        calculateTotal={calculateTotal}
                        checkoutProducts={checkoutProducts}
                    />
                    :
                    <div className="checkout-success">
                    
                    <h3>Checkout Info <span className="icon button"><i className="material-icons md-48">fact_check</i></span>
                    </h3>
                    
                    <div className="content">
                        <p>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the
                            order, it will be delivered to your dorm room.</p>
                    </div>
                    
                    </div>
                    }
                     
                </div>
                </div>
            </div>


      )
    }