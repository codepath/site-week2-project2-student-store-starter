import * as React from "react"
import "./ProductView.css"
import {useEffect, useState} from "react"

import {useParams} from "react-router-dom"
import ProductCard from '../ProductCard/ProductCard'
import axios from "axios"

export default function ProductView() {
    
    console.log("REACHED NEW PAGE!")
    // console.log(newProducts);
    const { id } = useParams();
    console.log(id);
    const [product, setProduct] = useState({})
    const quantity = 0; 
    // will change later
    const productUrl = "https://codepath-store-api.herokuapp.com/store/" + `${id}`

    useEffect(() => {
        axios.get(productUrl).then((response) =>{
            console.log("SETTING TO THIS: ", response.data.product);
            setProduct(response.data.product);
          // console.log(response.data.product) // getting the food item
          // console.log(product)
        })
    
      }, []);
      console.log("PRODUCT: ", product);
    
      if (!product) {return <h1 className ="loading" > Loading...</h1>} // undefined product array

return(
    
    <>
        {/* <img> style={{width: "200px"}} src={product.image}</img> */}
        {/* <p> {product.description} </p> */}

        <div className="product-view">
            <h1 className="product-id">Product #7</h1>
            <div className="product-view-card">
                <div className="product-card">
                    <div className="media">
                        <a href="/products/7">
                            <img src={product.image} alt="product cover" loading="lazy"></img></a>
                    </div>
                    <div className="product-info">
                        <div className="main-info">
                            <p className="product-name">{product.name}</p>
                            <div className="stars">
                                <img src={"https://www.transparentpng.com/download/star/jjbv96-star-icon-clipart.pngg"} alt="star ratings" className="star-rating"
                                style={{width: "20px", height: "20px"}}></img>
                                <img src={"https://www.transparentpng.com/download/star/jjbv96-star-icon-clipart.png"} alt="star ratings" className="star-rating"
                                style={{width: "20px", height: "20px"}}></img>
                                <img src={"https://www.transparentpng.com/download/star/jjbv96-star-icon-clipart.png"} alt="star ratings" className="star-rating"
                                style={{width: "20px", height: "20px"}}></img>
                                <img src={"https://www.transparentpng.com/download/star/jjbv96-star-icon-clipart.png"} alt="star ratings" className="star-rating"
                                style={{width: "20px", height: "20px"}}></img>
                                {/* <img src={"https://www.pngitem.com/pimgs/m/610-6107201_transparent-half-of-a-star-hd-png-download.png"} alt="star ratings" className="star-rating"
                                style={{width: "20px", height: "20px"}}></img> HALF STAR?? */} 
                                </div>
                            <p className="product-price">{"$"+product.price}</p>
                        </div>
                        <div className="desc">
                            <p className="product-description">{product.description}</p>
                        </div>
                        <div className="actions">
                        <div className="buttons">
                            <button className="add">
                            <i className="material-icons">add</i>
                            </button>
                            <button className="remove">
                            <i className="material-icons">remove</i>
                            </button>
                        </div>
                        <span className="quantity">
                            <span className="amt">{quantity}</span>
                        </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>  

    //     // if (product === -1){
    //     //     return <NotFound/>
    //     // } else {
    // {console.log("REACHED THE PAGE!!")}
)
}