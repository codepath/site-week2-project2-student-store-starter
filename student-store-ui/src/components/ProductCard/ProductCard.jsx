import * as React from "react"
import "./ProductCard.css"

  export default function ProductCard({ id, name, image, price }) {
    return (
      <Link to={`/product/${id}`}>
        <section className="product">
          <img className="product-image" src={image} alt={name} />
          <div className="main-info">
            <p>
              <b>{name}</b>
            </p>
            <p>
              <b>{price}</b>
            </p>
          </div>
        </section>
      </Link>
    );
  }