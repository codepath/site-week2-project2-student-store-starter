import CheckoutInfo from "../CheckoutInfo/CheckoutInfo"
import PaymentInfo from "../PaymentInfo.jsx/PaymentInfo"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <section className="sidebar">
      <ShoppingCart />
      <PaymentInfo />
      <CheckoutInfo />
    </section>
  )
}
