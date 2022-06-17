import * as React from "react"
import { useState} from "react";
import "./ProductCard.css"
import { Link } from "react-router-dom";

export default function ProductCard(props) {

  //console.log(props)

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

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
              <button className="add" >
                <i className="material-icons">add</i>
              </button>
              <button className="remove">
              <i className="material-icons">remove</i>
              </button>
            </div>
      </div>
      </div>

    )
  }