import * as React from "react"
import { Link } from "react-router-dom";
import './ProductCard.css'

export default function ProductCard(props) {
  const [isSelected, setSelected] = React.useState(false);

  const getProductCount = () => {
    return props.shoppingCart.find((item, i) => {
      return item.itemId === props.product.id;
    })
  }

  return (
    <div onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
      className={props.class}>

      {(props.class == 'product-card') ?
        <Link className="product-link" to={"products/" + props.product.id}>
          <img className="product-image" src={props.product.image} />
        </Link>
        :
        <img className="product-image" src={props.product.image} />
      }

      <div className="product-card-overview">


        <div className="product-card-header">
          <div className="section">
            <h1 className="title">{props.product.name}</h1>
          </div>
          <div className="section">
            <button onClick={(e) => props.handleRemoveItemFromCart(props.product)} className="btn right">-</button>
            <button onClick={(e) => props.handleAddItemToCart(props.product)} className="btn right">+</button>
          </div>
        </div>

        <span className="material-icons product-rating">star star star star star</span>
        {(props.class != "product-card") ?
          <span className="product-description">{props.product.description}</span> : null}

      </div>
      <CardFooter amount={props.product.amount} getProductCount={getProductCount} price={props.product.price} />
    </div>)
}

export function CardFooter(props) {
  return (
    <div className="product-card-footer">

      <div className="section">
        {((props.getProductCount() != null) && (props.getProductCount().quantity > 0)) ? <span className="amount product-quantity">{props.getProductCount().quantity}</span> : ""}
      </div>

      <div className="section right">
        <p>${(props?.price).toFixed(2)}</p>

      </div>
    </div>
  )
}