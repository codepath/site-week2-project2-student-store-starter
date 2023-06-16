import * as React from "react";
import "./ProductDetails.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

import { useParams } from 'react-router-dom';


export default function ProductDetail (props) {
    const { id } = useParams();
    console.log(id)

    console.log(props.products)

    const product = props.products.find((product) => product.id == parseInt(id));
    console.log(product)

    return(
       <>
        <Navbar />
        <Hero />
        <section className="prod-details">
            
        <img
          className="pd-poster"
          src={product.image}
          alt={`Image of ${product.name}`}
        />
        <div className="pd-info">
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
        </section>
       </>
        
    )
};

