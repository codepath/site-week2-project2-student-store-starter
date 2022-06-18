import * as React from "react"
import { Link } from "react-router-dom";
import './ProductCard.css'

export default function ProductCard(props) {
  const [isSelected, setSelected] = React.useState(false);

  const handleShoppingCartAdd = (toAdd) => {
    let newProduct = props.product;

    if ((!props.shoppingCart.find((cartProduct) => cartProduct.id === props.product.id))) {

      newProduct.count = 1;
      props.setShoppingCart((prevCart) => [...prevCart, newProduct]);
      console.log(`item:${newProduct.name} incremented ${newProduct.count}`);
    } else {
      //if cart product exists:
      //find cart product and get previous count + 1 
      let cartProduct = props.shoppingCart.find((cartProduct) => cartProduct.id === props.product.id);
      newProduct.count = cartProduct.count + toAdd;

      //get all the elements except new
      let shoppingCartNew = props.shoppingCart.filter((e) => {
        return e.id !== newProduct.id;
      })

      props.setShoppingCart([...shoppingCartNew, newProduct])
      console.log(`item:${newProduct.name} incremented ${newProduct.count}`);
    }
  }
  //TODO: fix spaghetti code
  const handleShoppingCartSubtract = (toAdd) => {
    let newProduct = props.product;
    let findProduct = props.shoppingCart.find((cartProduct) => cartProduct.id === props.product.id);
    if (findProduct) {

      if (findProduct.count > 0) {
        newProduct.count = findProduct.count + toAdd;
      }
      //get all the elements except new
      let shoppingCartNew = props.shoppingCart.filter((e) => {
        return e.id !== newProduct.id;
      })

      props.setShoppingCart([...shoppingCartNew, newProduct])
      console.log(`item:${newProduct.name} decremented ${newProduct.count}`);
    }
  }


  const getCardFooter = () => {
    if (!isSelected && (props.class === 'product-card')) {
      return (
        <div className="product-card-footer">
          <div className="section">
            <p>${(props.product.price).toFixed(2)}</p>

          </div>
          <div className="section">
            <div className="shoppingCartCount">{props.product.count || 0}</div>
          </div>
        </div>
      )

    } else {
      return (
        <div className="product-card-footer">
          <div className="section">
            <Link to={"products/" + props.product.id}><button className="btn see-more">See More!</button></Link>
            <p>${(props.product.price).toFixed(2)}</p>
          </div>
          <div className="section">
            <button onClick={(e) => handleShoppingCartSubtract(-1)} className="btn right">-</button>
            <button onClick={(e) => handleShoppingCartAdd(1)} className="btn right">+</button>
            <div className="shopping-cart-count">{props.product.count || 0}</div>
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