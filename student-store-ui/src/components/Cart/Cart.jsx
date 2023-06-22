import * as React from "react";

export default function Cart({cartItems, products}) {
    console.log(cartItems)
    const filteredCartItems = products.map((product) => {product.id in cartItems ? <h1>hi</h1> : <h2></h2>})

    return (

        console.log(cartItems)
    );
  }
  