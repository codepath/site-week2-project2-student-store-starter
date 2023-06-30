import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css"

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState(null);

  const url = `https://codepath-store-api.herokuapp.com/store`;

  React.useEffect(() => {
    axios.get(url).then((response) => {
      const products = response.data.products;
      const selectedProduct = products.find((p) => p.id === Number(params.id));
      setProduct(selectedProduct);
    });
  }, [params.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Center-on-Page">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      {/* <p>Price: {product.price}</p> */}
      <p>{product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}
