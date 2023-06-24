import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductCard({
  name,
  id,
  image,
  price,
  product,
  shoppingCart,
  setShoppingCart,
}) {
  function addToCart(product) {
    const checkProduct = shoppingCart?.find((item) => item?.id === product.id);
    if (checkProduct) {
      const updatedCart = shoppingCart?.map((item) => {
        if (item?.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setShoppingCart(updatedCart);
      console.log(updatedCart);
    } else {
      // spread operator and what it can take in?
      setShoppingCart([...shoppingCart, { ...product, quantity: 1 }]);
    }
  }

  function subToCart(product) {
    const checkProduct = shoppingCart?.find((item) => item?.id === product.id);
    console.log("checkProd", checkProduct);
    if (checkProduct) {
      let updatedCart = [...shoppingCart];
      for (let i = 0; i < updatedCart.length; i++) {
        if (updatedCart[i]?.id === product.id) {
          if (updatedCart[i].quantity > 1) {
            updatedCart[i].quantity--;
          } else {
            updatedCart.splice(i, 1);
          }
        }
      }
      setShoppingCart(updatedCart);
    }
  }

  return (
    <section className="product">
      <Link to={"products/" + id}>
        <img className="product-image" src={image} />
      </Link>

      <section className="product-info">
        <div className="main-info">
          <p className="product-name">{name}</p>
          <p className="product-price">{price}</p>
        </div>

        <div className="actions">
          <div className="buttons">
            <button
              className="add"
              onClick={() => {
                addToCart(product);
              }}
            >
              <i className="material-icons">add</i>
            </button>
            <button
              className="remove"
              onClick={() => {
                subToCart(product);
              }}
            >
              <i className="material-icons">remove</i>
            </button>
            <div className="item-quantity">
              <p>
                {shoppingCart?.find((item) => item.id === product.id)?.quantity}
              </p>
            </div>

            {/* {quantity > 0 ? (
              <div className="item-quantity">
                <p>{quantity}</p>
              </div>
            ) : (
              <></>
            )} */}
          </div>
        </div>
      </section>
    </section>
  );
}
