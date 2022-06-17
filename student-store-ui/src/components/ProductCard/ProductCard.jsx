import * as React from "react"
import { Link } from "react-router-dom";
import './ProductCard.css'

export default function ProductCard(props) {
  const [isSelected, setSelected] = React.useState(false);

  console.log(props.product);

  const getCardFooter = () => {
    if (!isSelected && (props.class === 'product-card')) {
      return (
        <div className="product-card-footer">
          <div className="section">
            <p>${(props.product.price).toFixed(2)}</p>

          </div>
          <div className="section">
            <div className="shoppingCartCount">0</div>
          </div>
        </div>
      )

    } else {
      return (
        <div className="product-card-footer">
          <div className="section">
            <Link to={"products/" + props.product.id}><button className="btn see-more">See More!</button></Link>
          </div>
          <div className="section">
            <button className="btn right">-</button>
            <button className="btn right">+</button>
            <div className="shopping-cart-count">0</div>
          </div>
        </div>
      )
    }
  }

  return (
    <div onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
      className={props.class}>
      <h1 className="title">{props.product.name}</h1>
      <img src={props.product.image} />
      <p>{props.product.description}</p>
      {getCardFooter()}

    </div>)
}