import { useState } from "react";
import ListItemForm from "../ListItemForm/ListItemForm";
import ListItem from "../ListItem/ListItem";
// import "./ShoppingList.css";

function ShoppingList({cart, products}) {
  return (
    <div className={`ShoppingList ${Object.keys(cart).length ? "list-full" : "list-empty"}`}>
      <h1 className="title">Shopping List</h1>

      {Object.keys(cart).length ?
        Object.entries(cart).map(([id, quantity]) => {
          const product = products.find(product => product.id === id);
          return (
            <div key={id}>
              <span>Product Name: {product.name}</span>
              <span>Quantity: {quantity}</span>
            </div>
          );
        })
        :  
        <h3>Your shopping list is empty</h3>
      }
    </div>
  );
}


export default ShoppingList;
