import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

export default function ProductCard(props) {

  // calculate quantity of the product
  // let productQuantity = 0
  // console.log("shopping cart", props.shoppingCart)
  // const  targetProduct = props.shoppingCart.find((productObj) => productObj.itemId == props.product.id)
  // if (targetProduct) {
  //   productQuantity = targetProduct.quantity
  // }


  const productCardClassName = props.showDescription ? "product-card expanded" : "product-card"

  return (
    <div className={productCardClassName}>
      <div className="media">
        <Link to={"/products/" + props.productId}>
          <img src={props.product.image} alt={`Image of ${props.product.name}`} />
        </Link>
      </div>

      <div className="product-name">
        <h1>{props.product.name}</h1>
      </div>
      <div className="product-price">
        <h2>{"$"+props.product.price.toFixed(2)}</h2>
      </div>
      <div className="product-description">
        <p>{props.showDescription ? props.product.description : null}</p>
      </div>

      <button className="remove" onClick={() => props.handleRemoveItemFromCart(props.productId)}>-</button>
      <button className="add" onClick={() => props.handleAddItemToCart(props.productId)}>+</button>
      
      <div className="product-quantity">
        <p>{props.quantity > 0 ? props.quantity : ""}</p>
      </div>
    </div>
  )
}