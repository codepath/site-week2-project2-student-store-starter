import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductView from "../ProductView/ProductView";

const ProductDetail = () => {
  const [product, setProduct] = useState("");
  const { productId } = useParams();
  console.log(productId);
  useEffect(() => {
    axios
      .get(`https://codepath-store-api.herokuapp.com/store/${productId}`)
      .then((response) => {
        //not sure
        console.log("product", response.data.product);
        setProduct(response.data.product);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [productId]);
  if (!ProductDetail) {
    return <h1 className="loading">Loading......</h1>;
  }

  return (
    <div className="product-detail">
      <ProductView
        product={product}
        productId={product.id}
        quantity={0}
        // handleAddItemToCart={handleAddItemToCart}
        // handleRemoveItemToCart={handleRemoveItemToCart}
      />
      {/* product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart */}
    </div>
  );
};

export default ProductDetail;
