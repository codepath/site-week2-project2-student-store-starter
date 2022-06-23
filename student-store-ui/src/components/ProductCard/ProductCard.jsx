import * as React from "react"
import { Link } from "react-router-dom";
import "./ProductCard.css"


export default function ProductCard(props) {
  console.log(props)

    return (
      <div>
      <div className="product-card">
        <div>
        <Link to={`/products/${props.product.id}`}>
        <img className="image" src={props.product.image} alt="Product cover" />
        </Link>
        <div className="main-info">
        <p>Name: {props.product.name}</p>
        <p>Price: {props.product.price}</p>
        </div>
      </div>
            <div className="buttons">
              <button className="add" onClick={() => props.handleAddItemToCart(props.product.id)}>
                <i className="material-icons">add</i>
              </button>
              <button className="remove" disabled={props.quantity === 0 ? true : false} onClick={() => props.handleRemoveItemFromCart(props.product.id)}>
                <i className="material-icons">remove</i>
              </button>
              <span className="quantity">
                        {props.quantity === 0 ? <span className="amt hide">{props.quantity}</span> : <span className="amt">{props.quantity}</span>}
              </span>
            </div>

      </div>
      </div>

    )
  }