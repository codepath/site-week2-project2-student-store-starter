import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import ProductRow from "../ProductRow/ProductRow";

export default function Sidebar({
  sidebar,
  setSidebar,
  cartItems,
  setCartItems,
  products,
}) {
  //sidebar is aka isOpen

  const sidebarClass = sidebar ? "sidebar open" : "sidebar closed";
  const buttonClass = sidebar
    ? "toggle-button button open"
    : "toggle-button button close";

  function handleOnToggle() {
    setSidebar(!sidebar);
  }

  function showIcons() {
    return (
      <>
        <button className={buttonClass}>
          <i className="material-icons md-48" onClick={() => handleOnToggle()}>
            arrow_forward
          </i>
        </button>
        <div className="shopping-cart">
          <div className="cart-icons">
            <span className="cart-icon icon button">
              <i className="material-icons md-48">add_shopping_cart</i>
            </span>
            <span className="cart-icon icon button">
              <i className="material-icons md-48">monetization_on</i>
            </span>
            <span className="cart-icon icon button">
              <i className="material-icons md-48">fact_check</i>
            </span>
          </div>
        </div>
      </>
    );
  }

  function showArrow() {
    return (
      <button className={buttonClass}>
        <i className="material-icons md-48" onClick={() => handleOnToggle()}>
          arrow_forward
        </i>
      </button>
    );
  }

  return (
    <div className={sidebarClass}>
      <br/><br/><br/>
      <div className="rows">
        { 
          sidebar ? 
          (cartItems.map((item) => {
            const product = products.find((p) => p.id === item.productId);
              return product ? (
                <div className="product-row" key={product.id}>
                  <span className="flex-2 cart-product-name">
                    {product.name}
                  </span>
                  <span className="center cart-product-quantity">
                    {item.quantity}
                  </span>
                  <span className="center cart-product-price">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="center cart-product-subtotal">
                    ${(product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ) : (null)
            })) : (null)}
      </div>

      <div className="wrapper">
        {sidebar ? (
          <>
            {showArrow()} <ShoppingCart />{" "}
          </>
        ) : (
          showIcons()
        )}
      </div>
    </div>
  );
          }