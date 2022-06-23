import React from 'react'

const CheckOutForm = ({isOpen, shoppingCart, checkoutForm, handleCheckoutFormChange, handleOnSubmitCheckoutForm, error, successMsg}) => {
  return (
    <>
        <div>CheckOutForm</div>
        <input value={checkoutForm.email} type="email" name='email' onChange={(e) => handleCheckoutFormChange("email", e.target.value)} />
        <input value={checkoutForm.name} type="text" name='name' onChange={(e) => handleCheckoutFormChange("name", e.target.value)} />
        <button onClick={handleOnSubmitCheckoutForm}>Checkout</button>
    </>
  )
}

export default CheckOutForm