import * as React from "react";
import ShoppingIcon from "remixicon-react/ShoppingBasket2FillIcon"
import "./ShoppingCart.css";

export default function ShoppingCart () {


    return(
<div className="shop" >
    <span>
    <ShoppingIcon /> 
    </span>
<h3>Shopping Cart</h3>
<p>No items added to cart yet. Start shopping now!</p>

</div>
        )
}
   

