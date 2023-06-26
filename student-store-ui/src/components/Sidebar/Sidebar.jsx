import * as React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
// import Cancel, { colorPalette } from "material-icons-react";
// import { BiSolidCartAdd } from "react-icons/fa";
// // import { AiOutlineShoppingCart } from "react-icons/fa";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Sidebar({
  products,
  shoppingCart,
  shoppingCartlength,
  handleAddItemToCart,
  handleRemoveItemFromCart,
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (shoppingCart?.length === 0) {
    // console.log(true);
  } else {
    // console.log("this is shopping", shoppingCart);
  }

  return (
    <section className={isOpen ? "sidebar open" : "sidebar closed"}>
      <ArrowRightAltIcon onClick={() => setIsOpen(!isOpen)}></ArrowRightAltIcon>

      {isOpen ? (
        <ShoppingCart products={products} shoppingCart={shoppingCart} />
      ) : null}
    </section>
  );
}
