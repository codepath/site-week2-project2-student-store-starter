import React from "react";
import "./ShoppingCart.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function ShoppingCart(props) {

  let tax = 7.25;
  let total = 0;
  let subTotal = 0;

  const {
    isOpen,
    products,
    shoppingCart,
    handleRemoveItemFromCart,
    handleAddItemToCart,
    getTotalItemsInCart,
    handleOnToggle,
  } = props;

  const shoppingCartHasItems = !shoppingCart.length ? false : true;

  return (
    <div className="shopping-cart">
      {isOpen == "closed" ? (
        <div className="cart-icons">
          <span className="cart-icon icon button" onClick={handleOnToggle}>
            <i className="material-icons md-48"></i>
          </span>
          <span className="cart-icon icon button" onClick={handleOnToggle}>
            <i className="material-icons md-48"></i>
          </span>
          <span className="cart-icon icon button" onClick={handleOnToggle}>
            <i className="material-icons md-48"></i>
          </span>
        </div>
      ) : (
        <div className="open">
          <h3 className="">
            Shopping Cart{" "}
            <span className="button">
              <i className="material-icons md-48"></i>
            </span>
          </h3>
          {!shoppingCartHasItems ? (
            <div className="notification">
              No items added to cart yet. Start shopping now!
            </div>
          ) : (
            <div className="CartTable">
              <div className="header">
                <div className="header-row">
                  <span className="flex-2">Name</span>
                  <span className="center">Quantity</span>
                  <span className="center">Unit Price</span>
                  <span className="center">Cost</span>
                </div>
                {shoppingCart.map((product) => {
                  subTotal += product.price * product.quantity;
                  return (
                    <CartItem
                      key={product.id}
                      product={product}
                      quantity={product.quantity}
                    />
                  );
                })}
              </div>
              <div className="receipt">
                <div className="receipt-subtotal">
                  <span className="label">Subtotal</span>
                  <span></span>
                  <span></span>
                  <span className="center subtotal">{subTotal}</span>
                </div>
                <div className="receipt-taxes">
                  <span className="label">Taxes and Fees</span>
                  <span></span>
                  <span></span>
                  <span className="center tax">{tax}</span>
                </div>
                <div className="receipt-total">
                  <span className="label">Total</span>
                  <span></span>
                  <span></span>
                  <span className="center total-price"></span>
                </div>
              </div>
            </div>
          )}
          <CheckoutForm />
        </div>
      )}
    </div>
  );
}

function CartItem(props) {
  const { product, quantity } = props;
  return (
    <div className="product-row">
      <span className="flex-2 cart-product-name">{product.name}</span>
      <span className="center cart-product-quantity">{quantity}</span>
      <span className="center cart-product-price">{product.price}</span>
      <span className="center cart-product-subtotal">
        {product.price * quantity}
      </span>
    </div>
  );
}





/*
import React from "react";
import "./ShoppingCart.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function ShoppingCart({
  isOpen,
  products,
  shoppingCart,
  handleRemoveItemFromCart,
  handleAddItemToCart,
  getTotalItemsInCart,
  handleOnToggle,}) {
  let subTotal = 0;
  let tax = 0;
  let total = 0;

  const shoppingCartHasItems = !shoppingCart.length ? false : true;

  return (
    <div className="shopping-cart">
      {isOpen == "closed" ? (
        <div className="cart-icons">
          <span className="cart-icon icon button" onClick={handleOnToggle}>
            <i className="material-icons md-48"></i>
          </span>
          <span className="cart-icon icon button" onClick={handleOnToggle}>
            <i className="material-icons md-48"></i>
          </span>
          <span className="cart-icon icon button" onClick={handleOnToggle}>
            <i className="material-icons md-48"></i>
          </span>
        </div>
      ) : (
        <div className="open">
          <h3 className="">
            Shopping Cart{" "}
            <span className="button">
              <i className="material-icons md-48"></i>
            </span>
          </h3>
          {!shoppingCartHasItems ? (
            <div className="notification">
              No items added to cart yet. Start shopping now!
            </div>
          ) : (
            <div className="CartTable">
              <div className="header">
                <div className="header-row">
                  <span className="flex-2">Name</span>
                  <span className="center">Quantity</span>
                  <span className="center">Unit Price</span>
                  <span className="center">Cost</span>
                </div>
                {shoppingCart.map((product) => (
                  <CartItem
                    key={product.id}
                    product={product}
                    quantity={product.quantity}
                  />
                ))}
              </div>
              <div className="receipt">
                <div className="receipt-subtotal">
                  <span className="label">Subtotal</span>
                  <span></span>
                  <span></span>
                  <span className="center subtotal"></span>
                </div>
                <div className="receipt-taxes">
                  <span className="label">Taxes and Fees</span>
                  <span></span>
                  <span></span>
                  <span className="center"></span>
                </div>
                <div className="receipt-total">
                  <span className="label">Total</span>
                  <span></span>
                  <span></span>
                  <span className="center total-price"></span>
                </div>
              </div>
            </div>
          )}
          <CheckoutForm />
        </div>
      )}
    </div>
  );
}

const CartItem = ({ product, quantity }) => {
  return (
    <div className="product-row">
      <span className="flex-2 cart-product-name">{product.name}</span>
      <span className="center cart-product-quantity">{quantity}</span>
      <span className="center cart-product-price">{product.price}</span>
      <span className="center cart-product-subtotal">
        {product.price * quantity}
      </span>
    </div>
  );
};

*/