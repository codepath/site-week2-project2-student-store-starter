import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";

export default function ProductDetails(){
    let params = useParams();
    const URL = `https://codepath-store-api.herokuapp.com/store/${params.id}`;
    const [isLoading, setIsLoading] = useState(true); 
    const [product, setProduct] = useState({});
    // fetch product data
    useEffect(() => {
        axios.get(URL).then((response)=> {
            setProduct(response.data.product);
            setIsLoading(false);
        });
    }, []);
    

    return (
        <div className="product-details-container">
            <div className="product-content">
                <div className="header-content">
                    <div className="product-image">
                        <img src={product.image} alt={"image of" + product.name} />
                    </div>

                    <div className="product--side-summary">
                        <h1 className="product-name">{product.name}</h1>
                        <p className="product-price">${product.price}</p>
                        <div className="product-rating"></div>
                    </div>

                </div>
                <div className="sub-header-content">
                    <p className="product-description">
                        {product.description}
                    </p>
                    <button onChange={() => alert("adding to cart")}>
                        Add To Cart
                    </button>
                </div>
                

                

            </div>
        </div>
    )
}