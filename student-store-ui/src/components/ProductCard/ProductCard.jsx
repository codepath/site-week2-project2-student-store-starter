import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

export default function ProductCard(props) {

  let USDFormat = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="product-card">
      <div className="media">
        <Link to={"/products/" + props.product.id}>
          <img src={props.product.image} alt={`Image of ${props.product.name}`} />
        </Link>
      </div>

      <div className="product-name">
        <h1>{props.product.name}</h1>
      </div>
      <div className="product-price">
        <h2>{USDFormat.format(props.product.price)}</h2>
      </div>
      <div className="product-description">
        <p>{props.showDescription ? props.product.description : null}</p>
      </div>

      <button className="remove" onClick={props.handleRemoveItemFromCart(props.productId)}>-</button>
      <button className="add" onClick={props.handleAddItemToCart(props.productId)}>+</button>

      {/* need to define shoppingCart object first */}
      {/* <p className="product-quantity">{shoppingCart > 0 : {shoppingCart} : null}</p> */}

    </div>
  )
}