import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Home({products}) {

    return (

        <div className="home">
            <div className="product-grid">
                <ProductGrid products={products}/>
            </div>
            <div className="about">
                About
            </div>
            <div className="Contact">
                Contact
            </div>
            <div className="Footer">
                Footer
            </div>
        </div>
        
    )

}
