// import * as React from "react";
// import ProductView from "../ProductView/ProductView";
// import "./ProductDetail.css";
// import {useParams} from "react-router-dom"
// import {useEffect} from "react"
// import axios from "axios"

// export default function ProductDetail(props) {
//   const [product, setProduct] = React.useState([]);
//   const {productId} = useParams();

//   useEffect(() => {
//     const getProduct = async () => {
//       try {
//         let url = "https://codepath-store-api.herokuapp.com/store/" + productId;
//         const response = await axios.get(url);
//         setProduct(response.data.product);
//       } catch {
//         <h1 className="loading">Loading...</h1>
//       }
//     };
//     getProduct();
//   }, []);

//   return (
//     <div className="product-detail">

//       <ProductView
//         product={props.product}
//         productId={props.productId}
//       />

//     </div>
//   );
// }