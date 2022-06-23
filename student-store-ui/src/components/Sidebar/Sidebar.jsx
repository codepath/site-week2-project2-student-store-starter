import * as React from "react";
import { ChevronRightRounded } from "@mui/icons-material";
import "./Sidebar.css";

const CART_TABLE_HEADERS = ["Name", "Quantity", "Unite Price", "Cost"];

const Sidebar = ({ cart }) => {
  const [open, setOpen] = React.useState(true);
  const toggleOpen = () => setOpen((prev) => !prev);
  const price = Object.values(cart).reduce((total, { price }) => total + price, 0);
  return (
    <section className={`sidebar ${open ? "open" : ""}`}>
      <div className={"shopping-cart"}>
        <h2>Shopping Cart</h2>
        <table>
          <thead>
            <tr>
              {CART_TABLE_HEADERS.map((header) => <th key={header}>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {Object.keys(cart).map((id) => (
              <tr key={id}>
                <td>{cart[id].label}</td>
                <td>{cart[id].count}</td>
                <td>${cart[id].price.toFixed(2)}</td>
                <td>${(cart[id].price * cart[id].count).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={3}>Subtotal</th>
              <td>${price.toFixed(2)}</td>
            </tr>
            <tr>
              <th colSpan={3}>Taxes &amp; Fees</th>
              <td>${(price * 0.0875).toFixed(2)}</td>
            </tr>
            <tr>
              <th colSpan={3}>Total</th>
              <td>${(price * 1.0875).toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className={"payment-info"}>
        <h2>Payment Info</h2>
        <form className={"payment-form"}>
          <input type={"text"} placeholder={"Name"} />
          <input type={"email"} placeholder={"Email"} />
          <label className={"terms-and-conditions"}>
            <input type={"checkbox"} />
            I have read and agree to the <a href={"/#terms-and-conditions"}>terms and conditions</a>
          </label>
          <input type={"submit"} />
        </form>
      </div>
      <button className={"toggle-open"} onClick={toggleOpen}>
        <ChevronRightRounded className={"chevron"} style={{ fontSize: 40 }}/>
      </button>
    </section>
  )
};

export default Sidebar;
