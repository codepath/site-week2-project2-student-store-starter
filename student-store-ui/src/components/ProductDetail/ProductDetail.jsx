import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

export default function ProductDetails() {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState();

  useEffect(() => {
    axios
      .get(`https://codepath-store-api.herokuapp.com/store/${id}`)
      .then((response) => {
        setProduct(response.data.product);
      });
  }, []);
  console.log(product);
  return (
    <>
      <div className="product-detail" key={id}>
        <div className="product-container">
          <div className="product-image">
            <img
              src={product?.image}
              alt={product?.name}
              style={{ width: "50%" }}
            />
          </div>
          <p>{product?.description}</p>
        </div>
      </div>
    </>
  );
}