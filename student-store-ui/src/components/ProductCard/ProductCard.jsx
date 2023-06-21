import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"

export default function ProductCard({ product }) {
    const [num, setNum] = React.useState(0);
  
    const add = () => {
      setNum(num + 1);
    };
  
    const subtract = () => {
      if (num === 0) {
        setNum(0);
      } else {
        setNum(num - 1);
      }
    };
    console.log(product)
  
    return (
      <section className="products-grid">
        <div className="product-card">
          <div className="product-img">
            <Link to={"product/" + product.productId}>
              <img src={product.image} alt={product.name} />
            </Link>
          </div>
          <div className="product-info">
            <p>{product.name}</p>
            <p>
              {product.price.toLocaleString("us-EN", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>
          <div className="action">
            <button onClick={subtract}>-</button>
            <button className="count">{num}</button>
            <button onClick={add}>+</button>
          </div>
        </div>
      </section>
    );
  }
  
