import Receipt from '../Receipt/Receipt'
import './ShoppingCart.css'
export default function ShoppingCart({
  isOpen,
  setisOpen,
  shoppingCart,
  setshoppingCart,
  products,
}) {
  var classNames = `shhopping-cart${isOpen ? '-active' : ''}`

  var purchase = []



  for (var i = 0; i < shoppingCart.length; i++) {
    products.map((element) => {
      if (element.id == shoppingCart[i].itemId) {
      
        purchase.push({
          name: element.name,
          price: element.price,
          quantity: shoppingCart[i].quantity,
        })
      }
    })
  }

  console.log(purchase)

  return (
    <div className={classNames}>
      <div className="open">
        <button className="back">
          <i
            className="material-icons md-58"
            onClick={() => setisOpen(!isOpen)}
          >
            arrow_backward
          </i>
        </button>
        <h3 className="shop_writing">
          Shopping Cart{' '}
          <span className="button">
            <i className="material-icons md-48">add_shopping_cart</i>
          </span>
        </h3>
        {shoppingCart.length <= 0 ? (
          <div className="notification">
            No items added to cart yet. Start shopping now!
          </div>
        ) : (
          <div>
            <Receipt purchase={purchase} shoppingCart={shoppingCart}  />
          </div>
        )}

        <div className="checkout-form">
          <h3 className="payment_info">
            {' '}
            Payment Info{' '}
            <span className="button">
              <i className="material-icons md-48">monetization_on</i>
            </span>
          </h3>
          <div className="input-field">
            <label className="label">Name</label>
            <div className="control ">
              <input
                name="name"
                className="checkout-form-input"
                type="text"
                placeholder="Student Name"
              />
            </div>
          </div>
          <div className="input-field">
            <label className="label">Email</label>
            <div className="control">
              <input
                name="email"
                className="checkout-form-input"
                type="email"
                placeholder="student@codepath.org"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input name="termsAndConditions" type="checkbox" />
                <span className="label">
                  I agree to the{' '}
                  <a href="#terms-and-conditions">terms and conditions</a>
                </span>
              </label>
            </div>
          </div>
          <p className="is-danger"></p>
          <div className="field">
            <div className="control">
              <button className="button checkout-button">Checkout</button>
            </div>
          </div>
        </div>
        <div className="checkout-success">
          <h3 className="check-info">
            Checkout Info{' '}
            <span className="icon button">
              <i className="material-icons md-48">fact_check</i>
            </span>
          </h3>
          <div className="content">
            <p>
              A confirmation email will be sent to you so that you can confirm
              this order. Once you have confirmed the order, it will be
              delivered to your dorm room.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
