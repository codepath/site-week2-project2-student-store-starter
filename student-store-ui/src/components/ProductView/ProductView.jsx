import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductView.css";

export default function ProductView({
  shoppingCart,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  let cartIndex = shoppingCart.findIndex((item) => item.itemId === product.id);
  let updatedCart = [...shoppingCart];
  let selectedItemQuantity;
  if (cartIndex === -1) {
    // not found in shopping cart (hasn't been added yet)
    selectedItemQuantity = 0;
  } else {
    selectedItemQuantity = updatedCart[cartIndex].quantity;
  }

  const productUrl =
    "https://codepath-store-api.herokuapp.com/store/" + `${id}`;

  useEffect(() => {
    axios.get(productUrl).then((response) => {
      // console.log(response.data.product)
      setProduct(response.data.product);
    });
  }, []);
  if (!product) {
    return <h1 className="loading"> Loading...</h1>;
  } // undefined product array
  else {
    const productPrice = product.price?.toLocaleString("us-EN", {
      style: "currency",
      currency: "USD",
    });

    return (
      <div className="product-view">
        <h1 className="product-id">Product #{id}</h1>
        <div className="product-view-card">
          <div className="product-card">
            <div className="media">
              <a href="/products/7">
                <img
                  src={product.image}
                  alt="product cover"
                  loading="lazy"
                ></img>
              </a>
            </div>
            <div className="product-info" style={{width: "800px"}}>
              <div className="main-info">
                <p className="product-name">{product.name}</p>
                <div className="stars">
                  <img
                    src={
                      "https://www.transparentpng.com/download/star/jjbv96-star-icon-clipart.png"
                    }
                    alt="star ratings"
                    className="star-rating"
                    style={{ width: "20px", height: "20px" }}
                  ></img>
                  <img
                    src={
                      "https://www.transparentpng.com/download/star/jjbv96-star-icon-clipart.png"
                    }
                    alt="star ratings"
                    className="star-rating"
                    style={{ width: "20px", height: "20px" }}
                  ></img>
                  <img
                    src={
                      "https://www.transparentpng.com/download/star/jjbv96-star-icon-clipart.png"
                    }
                    alt="star ratings"
                    className="star-rating"
                    style={{ width: "20px", height: "20px" }}
                  ></img>
                  <img
                    src={
                      "https://www.transparentpng.com/download/star/jjbv96-star-icon-clipart.png"
                    }
                    alt="star ratings"
                    className="star-rating"
                    style={{ width: "20px", height: "20px" }}
                  ></img>
                  {/* TODO: IMPORT REVIEWS? */}
                </div>

                <p className="product-price">{productPrice}</p>
              </div>
              <div className="desc">
                <p className="product-description">{product.description}</p>
              </div>
              <div className="actions">
                <div className="buttons">
                  <button className="add">
                    <i
                      className="material-icons"
                      onClick={() => handleAddItemToCart(product.id)}
                    >
                      add
                    </i>
                  </button>
                  <button className="remove">
                    <i
                      className="material-icons"
                      onClick={() => handleRemoveItemToCart(product.id)}
                    >
                      remove
                    </i>
                  </button>
                </div>
                <span className="quantity">
                  <span className="amt">{selectedItemQuantity}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      //     // if (product === -1){
      //     //     return <NotFound/>
    );
  }
}
