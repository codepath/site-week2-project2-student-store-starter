import * as React from "react"
import "./ProductDetails.css"
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import { useParams } from "react-router-dom"

export default function ProductDetails({products}) {
    const { id } = useParams();
    const product = products?.find((product) => product.id === parseInt(id));
      
    console.log(id)
    return (
        <>
        <Navbar />
        <Hero />
        <section className="prodsite">
            <h1>{product.name}</h1>
            <div className="prodsite-info">
                <div className="prodsite-text">
                <p>{product.description}</p>
                </div>
                <div className="prodsite-img">
                <img src={product.image} alt={product.name} />
                <h2>Product ID: #{product.id}</h2>

                </div>
            </div>
        </section>
        </>
    );
      }
 