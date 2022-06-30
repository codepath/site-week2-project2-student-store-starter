import * as React from 'react';
import './Sidebar.css';

export default function Sidebar({
  isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle, error, checkoutFormIsSubmitted, findQuantity, lastCheckedOutUser, lastShoppingCart,
}) {
  const sidebarClassName = isOpen ? 'sidebar sidebar-open' : 'sidebar sidebar-closed';
  const buttonText = !isOpen ? 'Open Sidebar' : 'Close Sidebar';
  return (
    <section className={sidebarClassName}>
      <button type="button" className="button is-dark is-outlined toggle-button" onClick={handleOnToggle}>{buttonText}</button>
      {isOpen ? (
        <div>
          <ShoppingCart
            isOpen={isOpen}
            products={products}
            shoppingCart={shoppingCart}
            findQuantity={findQuantity}
          />

          <CheckoutForm
            isOpen={isOpen}
            shoppingCart={shoppingCart}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            error={error}
            checkoutFormIsSubmitted={checkoutFormIsSubmitted}
            findQuantity={findQuantity}
            products={products}
            lastCheckedOutUser={lastCheckedOutUser}
            lastShoppingCart={lastShoppingCart}
          />
        </div>
      ) : null}

    </section>
  );
}

function findTotal(products, findQuantity) {
  // Calculate Prices
  let subtotal = 0;
  products.map((product) => {
    const quantity = findQuantity(product);
    subtotal += quantity * product.price;
  });
  return 1.0875 * subtotal;
}

function ShoppingCart({
  isOpen, products, shoppingCart, findQuantity,
}) {
  const total = findTotal(products, findQuantity);
  const subtotal = total / 1.0875;

  if (shoppingCart.length !== 0) {
    return (
      <div className="shopping-cart">
        {
      products.map((product) => {
        const quantity = findQuantity(product);
        if (quantity === 0) return null;
        return (
          <div>
            <div className="cart-product-name">{product.name}</div>
            <div className="cart-product-quantity">{quantity}</div>
          </div>
        );
      })
      }

        <div className="subtotal">
          Subtotal: $
          {subtotal.toFixed(2)}
        </div>
        <div className="total-price">
          Total after tax: $
          {total.toFixed(2)}
        </div>
      </div>
    );
  }
  return (
    <div className="shopping-cart">
      <div className="notification">No items added to cart yet. Start shopping now!</div>
    </div>
  );
}

function CheckoutForm({
  isOpen, shoppingCart, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, error, checkoutFormIsSubmitted, findQuantity, products, lastCheckedOutUser, lastShoppingCart
}) {
  return (

    <div className="checkout-form">
      <input
        className="checkout-form-input"
        type="email"
        name="email"
        placeholder="student@codepath.org"
        value={checkoutForm.email}
        onChange={(e) => handleOnCheckoutFormChange('email', e.target.value)}
      />
      <input
        className="checkout-form-input"
        type="text"
        name="name"
        placeholder="Student Name"
        value={checkoutForm.name}
        onChange={(e) => handleOnCheckoutFormChange('name', e.target.value)}
      />

      <button type="button" className="checkout-button" onClick={() => handleOnSubmitCheckoutForm(checkoutForm, shoppingCart)}>Checkout</button>
      {error ? <div className="error">{error}</div>
        : checkoutFormIsSubmitted
          ? (
            <div className="success">
              {' '}
              Success!
              <Receipt shoppingCart={shoppingCart} products={products} name={lastCheckedOutUser.name} email={lastCheckedOutUser.email} findQuantity={findQuantity} lastShoppingCart={lastShoppingCart} />
              {' '}

            </div>
          )
          : null}
    </div>
  );
}

function Receipt({
  shoppingCart, products, name, email, findQuantity, lastShoppingCart,
}) {
  const findQuantityInLastShoppingCart = (product) => {
    let quantity = 0;
    for (const productInCart of lastShoppingCart) {
      if (productInCart.productId === product.id) {
        quantity = productInCart.quantity;
        break;
      }
    }
    return quantity;
  };

  const totalAfterTax = (findTotal(products, findQuantityInLastShoppingCart)).toFixed(2);
  const totalBeforeTax = (totalAfterTax / 1.0875).toFixed(2);

  return (
    <div className="receipt">
      <h4>Receipt:</h4>
      Showing receipt for
      {' '}
      {name}
      {' '}
      available at
      {' '}
      {email}. 
      {products.map((product) => {
        const quant = findQuantityInLastShoppingCart(product);
        if (quant === 0) return null;
        const totalProductPrice = (quant * product.price).toFixed(2);

        return (
          <div>
            {quant}
            {' '}
            total
            {' '}
            {product.name}
            {' '}
            purchased at a cost of $
            {product.price}
            {' '}
            for a total cost of $
            {totalProductPrice}
            .
          </div>
        );
      })}
       Before taxes, the subtotal was $
      {totalBeforeTax}.
       After taxes and fees were applied, the total comes out to $
      {totalAfterTax}.
    </div>
  );
}
