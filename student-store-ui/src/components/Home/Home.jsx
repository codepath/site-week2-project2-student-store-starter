import * as React from "react";
import { useState } from "react";

import "./Home.css";
import { Link } from "react-router-dom";

export default function Home({
  products,
  items,
  category,
  setCartItems,
  cartItems,
  itemsOnCart,
  setItemsOnCart 
}) {
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
      const increment = { ...count, [cardId]: count[cardId] + 1 };
      setCount(increment);
    } else {
      const create = { ...count, [cardId]: 1 };
      setCount(create);
    }
    const cartCount = 1 + (count[cardId] || 0);
    addItemCart(cardId, cartCount);
  }

  function decrementCount(e, cardId) {
    if (cardId in count) {
      if (count[cardId] > 0) {
        const decrementCount = { ...count, [cardId]: count[cardId] - 1 };
        setCount(decrementCount);

        const cartCount = (count[cardId] || 0) - 1;
        const decrementItemCart = { ...cartItems, [cardId]: cartCount };
        console.log("cart after you just decremented", cartItems, cartCount);
        // const {[cardId]: value, prev} = count
        console.log("test",  cartCount, decrementItemCart)
        cartCount === 0
          ? (
            // delete cartItems[cardId],
            // delete count[cardId],
            count[cardId] = 0,
            console.log("test after deleting", cartItems, "count", count),
            console.log('every', Object.values(count).every(e => e === 0)),
            setCartItems(decrementItemCart)

            // setItemsOnCart(false)
            (Object.values(count).every(e => e === 0)) ? (setItemsOnCart(false)):(<></>)
            
            )
            
          : setCartItems(decrementItemCart);
      }
    }
  }

  function addItemCart(cardId, quantity) {
    const appendNewItem = { ...cartItems, [cardId]: quantity };
    setCartItems(appendNewItem);
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
                <span className="quantity">
                  <span className="amt">{count[product.id]}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
