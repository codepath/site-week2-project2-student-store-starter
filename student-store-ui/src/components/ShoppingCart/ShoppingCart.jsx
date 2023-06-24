import react, { useState, useEffect } from "react";
import "./ShoppingCart.css";

export default function ShoppingCart({
  searchTerm,
  setSearchTerm,
  items,
  setItem,
  shoppingCart,
  setShoppingCart,
  quantity,
  setQuantity,
  products,
  subtotal,
  setSubtotal,
  total,
  setTotal,
  taxes,
  setTaxes,
}) {
  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    const calcSubtotal = () => {
      let newSubTotal = 0;
      shoppingCart?.forEach((cart) => {
        let price = 0;
        for (let item of products) {
          if (cart.id === item.id) {
            price = item.price;
          }
        }
        newSubTotal += price * cart.quantity;
      });
      setSubtotal(newSubTotal);
    };
    const calcTaxes = () => {
      const taxRate = 0.0875;
      const newTaxes = subtotal * taxRate;
      setTaxes(newTaxes);
    };
    const calcTotal = () => {
      const newTotal = subtotal + taxes;
      setTotal(newTotal);
    };
    calcSubtotal();
    calcTaxes();
    calcTotal();
  }, [shoppingCart, subtotal, taxes]);
  function emptyCart() {
    setShoppingCart([]);
  }

  return (
    <div className="shopping-cart">
      <div className="open">
        <h3 className="">
          Shopping Cart{" "}
          <span className="button">
            <i className="material-icons md-48">add_shopping_cart</i>
          </span>
        </h3>

        {/* if (shoppingCart.length === 0) {
        return(
            <div className="notification">
          No items added to cart yet. Start shopping now!
        </div>
        );
    }else{
        return (
   <>
   
   
   </>
        )
    } */}

        <div class="CartTable">
          <div class="header">
            <div class="header-row">
              <span class="flex-2">Name</span>
              <span class="center">Quantity</span>
              <span class="center">Unit Price</span>
              <span class="center">Cost</span>
            </div>

            {shoppingCart.map((item) => (
              <div className="product-row">
                <span className="flex-2 cart-product-name">
                  {
                    products?.filter((product) => product.id === item.id)[0]
                      .name
                  }
                </span>

                <span className="center cart-product-quantity">
                  {item.quantity}
                </span>

                <span className="center cart-product-price">
                  {
                    products?.filter((product) => product.id === item.id)[0]
                      .price
                  }
                </span>

                <span className="center cart-product-subtotal">
                  {products?.filter((product) => product.id === item.id)[0]
                    .price * item.quantity}
                </span>
              </div>
            ))}
          </div>
          <div class="receipt">
            <div class="receipt-subtotal">
              <span class="label">Subtotal</span>
              <span></span>
              <span></span>
              <span class="center subtotal">${subtotal}</span>
            </div>
            <div class="receipt-taxes">
              <span class="label">Taxes and Fees</span>
              <span></span>
              <span></span>
              <span class="center">${taxes}</span>
            </div>
            <div class="receipt-total">
              <span class="label">Total</span>
              <span></span>
              <span></span>
              <span class="center total-price">${total}</span>
            </div>
          </div>
        </div>
        <div className="checkout-form">
          <h3 className="">
            Payment Info{" "}
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
                onChange={handleChange}
                placeholder="Student Name"
                value={searchTerm}
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
                onChange={handleChange}
                placeholder="student@codepath.org"
                value={searchTerm}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input name="termsAndConditions" type="checkbox" />
                <span className="label">
                  I agree to the{" "}
                  <a href="#terms-and-conditions">terms and conditions</a>
                </span>
              </label>
            </div>
          </div>
          <p className="is-danger">
            No cart or items in cart found to checkout.
          </p>
          <div className="field">
            <div className="control">
              <button className="button checkout-button">Checkout</button>
            </div>
          </div>
        </div>
        <div className="checkout-success">
          <h3>
            Checkout Info{" "}
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
  );
}
