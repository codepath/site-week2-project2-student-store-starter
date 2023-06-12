import * as React from "react"
import "./Home.css"


function Hero() {
  return (
    <>
      <h1>Hero Baner</h1>
    </>
  )
}
function ProductGrid(props) {
  return (
    <>
    <h1>Product Grid Goes Here</h1>
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
function SearchBar(props){
  return (
    <>
      <h1>Search Bar goes here + filtering</h1>
    </>
  )
  
}
export default function Home() {
  return (
    <div className="home">
      <Hero />
      <SearchBar />
      <ProductGrid />
    </div>
  )
}
