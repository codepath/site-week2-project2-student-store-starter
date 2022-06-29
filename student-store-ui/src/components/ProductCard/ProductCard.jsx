import * as React from "react"
import "./ProductCard.css"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

export default function ProductCard(props) {
  //console.log(props)
  
  var [quantity, setQuantity] = React.useState(0);
  //props.shoppingCart.map((item) => {
    //if (item.itemId === productId)
    //{
     // quantity = item.quantity;
    //}
  //})
    return (
      <div className="productCard">
      <div className="media"><Link to={`/products/` + props.productId}>
      <img className="picture" src={props.image} alt="" loading="lazy" />
      </Link></div>
        <p className="product-name">{props.name}</p>
        <div className="stars">{ratingToStars(5)}
        <button className="add-to-cart" onClick={() => {
        props.handleAddItemToCart(props.productId);
        if(quantity > -1){setQuantity(quantity++)}
        }}>
              <i className="material-icons">add</i>
              <p>{quantity}</p>
            </button>
            <button className="remove-from-cart" onClick={() => {
              props.handleRemoveItemFromCart(props.productId)
              if(quantity >= 0){setQuantity(quantity--)}
              }}>
              <i className="material-icons">remove</i>
            </button>
            </div>
        <p className="product-price">${props.price.toFixed(2)}</p>
        {(props.showDescription) ? <p>{props.description}</p> : (null)}
      </div>
    )
}

function ratingToStars(rating) {
  if (rating === null || rating == 0) {
      return "⭐";

  }
  let result = ""
  let stars = Math.ceil(rating)
  for (let i = 0; i < stars; i++) {
      result += "⭐";

  }
  return result;
}

function showTheDescription(showDescription){
  
}