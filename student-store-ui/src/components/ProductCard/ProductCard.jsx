import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
// import { addToCart } from ProductRow
import ProductRow from "../ProductRow/ProductRow";

export default function ProductCard({ product, cartItems, setCartItems }) {
  const [quantity, setQuantity] = React.useState(0);

  const handleAddCartItems = () => {
    setQuantity((prevQuantity) => {
      let newQuantity = prevQuantity + 1;
      let newCart;
      const productInCart = cartItems.find(
        (item) => item.productId === product.id
      );
      if (productInCart) {
        productInCart.quantity = newQuantity;
        newCart = cartItems.map((item) =>
          item.productId === product.id ? productInCart : item
        );
      } else {
        newCart = [
          ...cartItems,
          { productId: product.id, quantity: newQuantity },
        ];
      }
      setCartItems(newCart);
      console.log(cartItems);
      return newQuantity;
    });
  };
  const handleRemoveCartItems = () => {
    setQuantity((prevQuantity) => {
      let newQuantity = prevQuantity > 0 ? prevQuantity - 1 : 0;
      let newCart;
      const productInCart = cartItems.find(
        (item) => item.productId === product.id
      );
      if (productInCart) {
        if (newQuantity === 0) {
          newCart = cartItems.filter(
            (item) => item.productId !== product.id
          );
        } else {
          productInCart.quantity = newQuantity;
          newCart = cartItems.map((item) =>
            item.productId === product.id ? productInCart : item
          );
        }
        setCartItems(newCart);
      }
      console.log(cartItems);
      return newQuantity;
    });
  };

  return (
    <div className="card">
      <Link to={`products/${product.id}`}>
        <img className="small-image" src={product.image} alt="product cover" />
        <div className="product-info">
          <div className="main-info">
            <p className="product-name">{product.name}</p>
            <div className="stars"></div>
            <p className="product-price">{product.price}</p>
          </div>
        </div>
      </Link>
      <div className="actions">
        <div className="buttons">
          <button className="add" onClick={() => handleAddCartItems()}>
            {/* <button className="add"> */}
            <i className="material-icons">add</i>
          </button>
          {/* <button className="remove" onClick={() => handleCartItems(-1)}> */}
          <button className="remove" onClick={() => handleRemoveCartItems()}>
            <i className="material-icons">remove</i>
          </button>
          <div>
          {quantity > 0 && (
            <span className="quantity">
              <span className="amt">{quantity}</span>
            </span>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
