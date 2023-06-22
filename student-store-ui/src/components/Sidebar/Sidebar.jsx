import * as React from "react";
import "./Sidebar.css";
import MenuLineIcon from "remixicon-react/MenuFillIcon";
// import ShoppingIcon from "remixicon-react/ShoppingBasket2FillIcon"
// import PaymentIcon from "remixicon-react/MoneyDollarCircleFillIcon"
// import CheckoutIcon from "remixicon-react/CheckboxCircleFillIcon"
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../Checkout/CheckoutForm";
import Payment from "../Payment/Payment";

export default function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="sidebar" style={{ width: isOpen ? "30%" : "5%" }}>
      <button
        id="button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {" "}
        {isOpen ? <MenuLineIcon style={{margin:'0 auto'}}/> : <MenuLineIcon style={{margin:'0 auto'}}/>}{" "}
      </button>
      {isOpen && (
        <>
          <ShoppingCart />
          <Payment/>
          <CheckoutForm />

    
        </>
      )}
    </div>
  );
}
