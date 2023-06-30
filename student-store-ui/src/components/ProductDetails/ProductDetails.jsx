import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";
import AddToCartButtton from "../AddToCartButton/AddToCartButton";

export default function ProductDetails(){
    let params = useParams();
    const URL = `http://localhost:3001/store/${params.id}`;
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

                    <div className="product-side-summary">
                        <h1 className="product-name">{product.name}</h1>
                        <p className="product-details-price">${product.price?.toFixed(2)}</p>
                        <div className="product-rating"></div>
                        <div className="cart-button-container">
                            <AddToCartButtton product={product} />
                        </div>
                    </div>

                </div>
                <div className="sub-header-content">
                    <h1 className="description-container">
                        Description
                    </h1>
                    <p className="product-description">
                        {product.description}
                    </p>
                </div>
            </div>
        </div>
    );
}