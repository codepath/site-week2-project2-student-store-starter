import { useState } from "react";
import ListItemForm from "../ListItemForm/ListItemForm";
import ListItem from "../ListItem/ListItem";
// import "./ShoppingList.css";

function ShoppingList({cart}) {
  return (
    <div className={`ShoppingList ${Object.keys(cart).length ? "list-full" : "list-empty"}`}>
      <h1 className="title">Shopping List</h1>

      {Object.keys(cart).length ?
        Object.entries(cart).map(([id, quantity]) => (
          <div key={id}>
            <span>Product ID: {id}</span>
            <span>Quantity: {quantity}</span>
          </div>
        ))
        :  
        <h3>Your shopping list is empty</h3>
      }
    </div>
  );
}

export default ShoppingList;
