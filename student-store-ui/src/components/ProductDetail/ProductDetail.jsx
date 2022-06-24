import * as React from "react"
import {useState, useEffect} from "react"
import {useParams} from 'react-router-dom';
import "./ProductDetail.css"

import ProductView from "../ProductView/ProductView";
import axios from "axios";

export default function ProductDetail({handleAddItemToCart, shoppingCart, }) {
    
    const [product, setProduct] = useState();
    const [isFetching, setFetching] = useState(true);
    let { productId } = useParams();
    console.log("helpMeee", productId)
    
    // useEffect(() => {
    //       axios.get("http://localhost:3001/store/" + productId).then(function(response) {
    //     //axios.get("https://codepath-store-api.herokuapp.com/store/" + productId).then(function(response) {
    //         setProduct(response.data.product);
    //         setFetching(false);
    //     }).catch(function(error) {
    //         console.log(error.message);
    //     })
    //     console.log("product detail", product)
    // });

    // useEffect(() => {
    //     setFetching(true)
    //         axios.get("http://localhost:3001/store/" + productId)
    
    //       .then((response) => {
    //           setProduct(response.data.product)
    //       })
          
    //       .catch((error)=>{
    //         console.log(error)
    //       })
    //       setFetching(false)
    //   },[])

        React.useEffect(() => {
            console.log("using effect")
            const fetchProductById = async () => {
            setFetching(true);

            try {
                const response = await axios.get(`http://localhost:3001/store/${productId}`);
                console.log(response)
                const productData = response.data;
                setProduct(productData);
            } catch (error) {
                console.log(error);
              
            }
            
            
            setFetching(false);
            }

            fetchProductById();

            
        }, [productId]);

    

    return (<div className="product-detail">
            {/* {isFetching ? <h4>Loading...</h4> : 
            <ProductView product={product} productId={productId}></ProductView>} */}
            {console.log("product123456", product)}
            {console.log ("TEST",handleAddItemToCart)}
            {product && !isFetching  ?<ProductView product={product} productId={productId} shoppingCart={shoppingCart} handleAddItemToCart={handleAddItemToCart}></ProductView> : <h4>Loading...</h4>}
        </div>);
}

//shout out kiara and robert