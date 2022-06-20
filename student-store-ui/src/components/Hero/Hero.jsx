import * as React from "react"
import background from "./background.png"

export default function Hero() {
  return (
    <div className="hero">
        <h1 className="intro"> Welcome! </h1>
        <img className="hero-img" src={background}/>
    </div>
  )
}
