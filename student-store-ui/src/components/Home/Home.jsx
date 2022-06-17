import * as React from "react"
import "./Home.css"

import Hero from "../Hero/Hero"
import ProductSettings from "../ProductSettings/ProductSettings"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Contact from "../Contact/Contact"

export default function Home(props) {
  const [category, setCategory] = React.useState('all');

  return (
    <div className="home">
      <Hero/>
      <ProductSettings setCategory={setCategory}/>
      <ProductGrid category={category} products={props.products}/>
      <About/>
      <Contact/>
    </div>
  )
}





