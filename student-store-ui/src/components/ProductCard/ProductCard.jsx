import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({ product, cart, setCart }) {
  const [quantity, setQuantity] = React.useState(0);

  const handleAddToCart = () => {
    setQuantity((prevQuantity) => {
      let newQuantity = prevQuantity + 1;
      let newCart;

      const productInCart = cart.find((item) => item.productId === product.id);
      if (productInCart) {
        productInCart.quantity = newQuantity;
        newCart = cart.map((item) =>
          item.productId === product.id ? productInCart : item
        );
      } else {
        newCart = [...cart, { productId: product.id, quantity: newQuantity }];
      }

      setCart(newCart);
      return newQuantity;
    });
  };

  const handleRemoveFromCart = () => {
    setQuantity((prevQuantity) => {
      let newQuantity = prevQuantity > 0 ? prevQuantity - 1 : 0;
      let newCart;

      const productInCart = cart.find((item) => item.productId === product.id);
      if (productInCart) {
        if (newQuantity === 0) {
          newCart = cart.filter((item) => item.productId !== product.id);
        } else {
          productInCart.quantity = newQuantity;
          newCart = cart.map((item) =>
            item.productId === product.id ? productInCart : item
          );
        }

        setCart(newCart);
      }

      return newQuantity;
    });
  };

  return (
    <div className="product-card">
      <div className="media">
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt="product cover" loading="lazy" />
        </Link>
      </div>
      <div className="product-info">
        <div className="main-info">
          <p className="product-name">{product.name}</p>
          <div className="stars">
            <p>★★★★☆</p>
          </div>
          <p className="product-price">${product.price.toFixed(2)}</p>
        </div>
        <div className="actions">
          <div className="buttons">
            <button className="add" onClick={handleAddToCart}>
              <i className="material-icons">add</i>
            </button>
            <button className="remove" onClick={handleRemoveFromCart}>
              <i className="material-icons">remove</i>
            </button>
          </div>
          {quantity > 0 && (
            <span className="quantity">
              <span className="amt">{quantity}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
