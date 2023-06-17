import "./ProductDetail.css"
import ProductView from "../ProductView/ProductView"
import { useParams } from "react-router-dom"
import React, {useEffect, useState} from "react"
import axios from "axios"

 export default function ProductDetail() {

  const [products, setProductList] = useState([]);
  let { productId } = useParams();

  useEffect(() => {
    axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`)
    .then((response) => {
      setProductList(response.data.product)
    })
    .catch((error) => {
      console.error(error);
    })
  }, [productId])

  return (

    <div className="product-detail">
      <ProductView product={products} productId={productId}
      />
    </div>
  )
}
