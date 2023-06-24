export default function ShoppingCart({
  isOpen,
  products,
  shoppingCart,
  setShoppingCart,
}) {
  return (
    <div className="shopping-cart">
      <div className="open">
        <h3>
          Shopping Cart
          <span className="button">
            <i className="material-icons md-48">add_shopping_cart</i>
          </span>
        </h3>
        <div className="notification">
          <p>
            {shoppingCart?.map((item, idx) => (
              <>
                {item.name} {item.price} {item.quantity}
                <br></br>
              </>
            ))}
          </p>
        </div>
        <div className="checkout-form">
          <h3>
            Payment Info
            <span className="button">
              <i className="material-icons md-48">monetization_on</i>
            </span>
          </h3>
          <div className="input-field">
            <label className="label">Name</label>
            <div className="control">
              <input
                name="name"
                className="checkout-form-input"
                type="text"
                placeholder="Student Name"
              ></input>
            </div>
            <div className="input-field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  name="email"
                  className="checkout-form-input"
                  type="email"
                  placeholder="student@codepath.org"
                ></input>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <span className="label">
                  <input name="termsAndConditions" type="checkbox"></input>I
                  agree to the
                  <a href="#terms-and-conditions"> terms and conditions</a>
                </span>
              </label>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="checkout-button">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
