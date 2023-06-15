import * as React from "react"
import "./ProductDetails.css"
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import { useParams } from "react-router-dom"

export default function ProductDetails(props) {
    const { id } = useParams();
    const product = props.props.find((product) => product.id === parseInt(id));
    console.log(product)
    return (
        <>
        <Navbar />
        <Hero />
        <section className="prodsite">
            <h2>{product.name}</h2>
            <div className="prodsite-info">
                <div className="prodsite-text">
                <p>{product.description}</p>
                </div>
                <div className="prodsite-img">
                <img src={product.image} alt={product.name} />
                </div>
            </div>
        </section>
        </>
    );
      }
 
