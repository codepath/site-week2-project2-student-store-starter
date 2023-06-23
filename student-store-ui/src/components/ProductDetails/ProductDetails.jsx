import { useParams } from "react-router-dom";
import * as React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./ProductDetails.css";
// import ProductView from '../ProductView/ProductView';

export default function ProductDetails() {
  let { id } = useParams();
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/store/${id}`)
      .then((response) => {
        setProduct(response.data.product);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  //   if (!product) {
  //     return <NotFound />;
  //   }
  return (
    <div className="product-detail">
      <div className="product-view">
        <h1 className="product-id">Product #{id}</h1>
        <div className="product-view-card">
          <div className="product-card">
            <div className="media">
              <img src={product.image} alt="product cover" loading="lazy" />
            </div>
            <div className="product-info">
              <div className="main-info">
                <p className="product-name">{product.name}</p>
                <div className="stars">
                  <p>★★★★☆</p>
                </div>
                <p className="product-price">${product.price}</p>
              </div>
              <div className="desc">
                <p className="product-description">{product.description}</p>
              </div>
              <div className="actions">
                <div className="buttons">
                  <button className="add">
                    <i className="material-icons">add</i>
                  </button>
                  <button className="remove">
                    <i className="material-icons">remove</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="product-detail">
  <ProductView product={product} productId={productId} />
</div>; */
}
