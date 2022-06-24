import "./CheckoutForm.css"

export default function CheckoutForm({ isOpen, shoppingCart, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, error, success }) {

    const cartOpen = isOpen ? "open" : "closed";

    return (
        <div className="checkout-form">
            <div className={cartOpen}>
                <h3>
                    Payment Info
                    <span className="button">
                        <i className="material-icons md-48">
                            monetization_on
                        </i>
                    </span>
                </h3>

                <div className="input-field">
                    <label className="label">
                        Name
                    </label>
                    <div className="control">
                        <input name="name" className="checkout-form-input" type="text" placeholder="Student Name" onChange={(e) => handleOnCheckoutFormChange("name", e.target.value)} value={checkoutForm.name}></input>
                    </div>
                </div>

                <div className="input-field">
                    <label className="label">
                        Email
                    </label>
                    <div className="control">
                        <input name="email" className="checkout-form-input" type="text" placeholder="student@email.com" onChange={(e) => handleOnCheckoutFormChange("email", e.target.value)} value={checkoutForm.email}></input>
                    </div>
                    <div className="button-container">
                        <button className="checkout-button" onClick={handleOnSubmitCheckoutForm}>Checkout</button>
                    </div>
                    {error != "" && <div className="error">{error}</div>}
                    {success != "" && <div className="sucess">{success}</div>}
                </div>
            </div>

        </div>
    )
}
