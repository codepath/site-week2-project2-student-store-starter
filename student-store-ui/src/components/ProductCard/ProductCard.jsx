import * as React from "react"
import { useState} from "react";
import "./ProductCard.css"

export default function ProductCard(props) {

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
        <img className="image" src={props.product.image} onClick={toggleModal} alt="Product cover" />
        <div className="main-info">
        <p>Name: {props.product.name}</p>
        <p>Price: {props.product.price}</p>
        </div>
      </div>
            <div className="buttons">
              <button className="add">
                <i className="material-icons">add</i>
              </button>
              <button className="remove">
              <i className="material-icons">remove</i>
              </button>
            </div>
      </div>
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <img className="modal-image" src={props.product.image} alt="Product cover" />
            <p>Name: {props.product.name}</p>
            <p>Category: {props.product.category}</p>
            <p>{props.product.description}</p>
            <p>Price: {props.product.price}</p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      </div>

    )
  }