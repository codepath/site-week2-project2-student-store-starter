import * as React from "react"
import "./ProductCard.css"
import {useEffect, useState} from "react"
import { Link } from 'react-router-dom'


// export default function ProductCard({product, index, quantity}){
export default function ProductCard({product, index}){
    const quantity = 0;
    return (
        <div className="product-card" key={index} > 
            <Link to={"products/" + product.id}>
                <img src={product.image} ></img>
            </Link>
            {/* {onClick={() => selectSearchEntry(searchEntry)}} */}
            <div className="product-info">
                <div className="main-info">
                    <p className="product-name">{product.name}</p>
                    <div className="stars">
                        <img src={"https://www.transparentpng.com/download/star/jjbv96-star-icon-clipart.png"} alt="star ratings" className="star-rating"
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
                        {console.log(product.price)}
                    <p className="product-price">{"$"+product.price}</p>
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
        </div> )}