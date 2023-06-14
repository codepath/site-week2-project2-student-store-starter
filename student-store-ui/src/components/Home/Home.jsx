import * as React from "react"
import "./Home.css"
import "./Hero.css"
import cartPNG from "../../../Assets/cart_logo.png"


function Hero() {
  return (
      <div className="hero-container">
        <div className="hero-content">
          <div className="cta-text">
            <h1>CodePath</h1>
            <h1>Collectibles</h1>
            <p>Shop all things <b>CodePath Univeristy</b>. From Clothes, Food, and everything in between!</p>
          </div>
          <div className="hero-media">
            <img src={cartPNG} alt="shopping art logo" />
          </div>
        </div>
      </div>
  )
}
function ProductGrid(props) {

  return (
    <>
    <h1>Best Selling Products</h1>
    {props.products.map((product) => (
      <div className="product">
        <img src={product.image} alt={"image of" + product.name} />
        <p className="product-title">{product.name}</p>
        <p className="product-price">{product.price}</p>
      </div>
    ))}
    </>
  )
}

function ProudctCard(props){
  return (
    <>
      <h1>Product card goes here</h1>
    </>
  )
}
function QueryBar(props){
  return (
    <div className="query-bar-container">
      <h1>Search Bar goes here + filtering</h1>
    </div>
  )
  
}

export default function Home(props) {
  return (
    <div className="home">
      <Hero />
      <QueryBar  />
      <ProductGrid products={props.products}/>
    </div>
  )
}
