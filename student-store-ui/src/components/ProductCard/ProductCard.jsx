import * as React from "react"
import './ProductCard.css'

export default function ProductCard(props) {
  const [isSelected, setSelected] = React.useState(false);
  return (
    <div onMouseEnter={() => setSelected(true)} onMouseLeave={() => setSelected(false)} className="product-card">
      <h1 className="title">{props.product.name}</h1>
      <img src={props.product.image} />
      <p>{props.product.description}</p>
      <div className="product-card-footer">
        {isSelected === true ? <button className="btn">See More!</button> : <p>${props.product.price}</p>}
      </div>
    </div>)
}