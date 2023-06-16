import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetails({ }) {

  const params = useParams()
  const [products, setProducts] = useState([])

  const url = `https://codepath-store-api.herokuapp.com/store`

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products)
    });
  }, []);

  let product = products[params.id -1]

  return (
    <div>
      <h2>{product?.name}</h2>
      <img src={product?.image} alt={product?.name} />
      <p>{product?.description}</p>
      <p>Price: {product?.price}</p>
    </div>
  );
}
