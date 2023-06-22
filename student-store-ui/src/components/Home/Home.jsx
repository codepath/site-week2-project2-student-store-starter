import * as React from "react";
import { useState } from "react";

import "./Home.css";
import { Link } from "react-router-dom";

export default function Home({ products, items, category, setCartItems, cartItems }) {
  const filteredProducts = products.filter((product) => {
    const matchSearch =
      items === "" || product.name.toLowerCase().includes(items);
    const matchCategory =
      category.toLowerCase() === "" ||
      product.category?.toLowerCase() === category.toLowerCase();
    return matchSearch && matchCategory;
  });

  const [count, setCount] = useState({});

  function incrementCount(e, cardId) {
    if (cardId in count) {
      // console.log("Item in cart already")
      const increment = { ...count, [cardId]: count[cardId] + 1 };
      console.log("Adding cart item", increment)
      setCount(increment);
    } else {
      console.log("Item not in cart already")
      const create = { ...count, [cardId]: 1 };
      console.log("New cart item", create)
      setCount(create);
    }
    // console.log('trying the btton', count)
    const cartCount = 1 + (count[cardId] || 0)
    addItemCart(cardId, count[cardId])
    // console.log('cart',cartItems)

  }

  function decrementCount(e, cardId) {
    if (cardId in count) {
      if (count[cardId] > 0) {
        const decrementCount = { ...count, [cardId]: count[cardId] - 1 };
        setCount(decrementCount);
      }
    }
  }

  function addItemCart(cardId, quantity){
    const appendNewItem = {...cartItems, [cardId]: quantity}
    setCartItems(appendNewItem)
    console.log('log home', cartItems)
  }

  return (
    <div className="home" id="Buy">
      <h3>Best Selling Products</h3>

      <div className="product-grid">
        {filteredProducts?.map((product) => (
          <div className="product">
            <Link to={"/" + product.id}>
              <img src={product.image} alt="" />
            </Link>
            <div className="description-line">
              <div>
                <p>{product.name}</p>
                <p>${product.price}</p>
              </div>

              <div className="actions">
                <div className="buttons">
                  <button
                    className="add"
                    onClick={(e) => incrementCount(e, product.id)}
                  >
                    <i className="material-icons">add</i>
                  </button>
                  <button
                    className="remove"
                    onClick={(e) => decrementCount(e, product.id)}
                  >
                    <i className="material-icons">remove</i>
                  </button>
                  <button></button>
                </div>
                <span class="quantity">
                  <span class="amt">{count[product.id]}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
