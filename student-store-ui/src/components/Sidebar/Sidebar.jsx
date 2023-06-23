import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar({ cart, products }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [isContentVisible, setIsContentVisible] = React.useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsContentVisible(!isSidebarOpen);
  };

  return (
    <section className={isSidebarOpen ? "sidebar open" : "sidebar closed"}>
      <div className="wrapper">
        <button
          className={`toggle-button button ${isSidebarOpen ? "open" : ""}`}
          onClick={handleSidebarToggle}
        >
          <i className="material-icons md-48">arrow_forward</i>
        </button>
        <div className="shopping-cart">
          {isContentVisible && (
            <ShoppingCart
              cart={cart}
              handleSidebarToggle={handleSidebarToggle}
              products={products}
            />
          )}
          {isContentVisible && (
            <CheckoutForm handleSidebarToggle={handleSidebarToggle} />
          )}
        </div>
      </div>
    </section>
  );
}
