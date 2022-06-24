import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import Hero from "../Hero/Hero"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
export default function ShoppingCart({isOpen, products, shoppingCart}) {
  return (
    <div className="shopping-cart">
      {/* {
        products
          .filter((product, idx) => product.id == clickedCategory)
          .map((product, idx) => (
            <ProductCard  product={product} productId={product.id}
          ))
         } */}
    </div>
 )
}