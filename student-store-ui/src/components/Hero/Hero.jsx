import * as React from "react"
// import background from "./background.png"
import "./Hero.css"

export default function Hero() {
  return (
    <div className="hero">
      <div className="intro">
        <h1> Welcome! <br/> Find Your Merch. </h1>
        <h2> We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready. </h2>
      </div>
        <img className="hero-img" src={"https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"}/>
    </div>
  )
}
