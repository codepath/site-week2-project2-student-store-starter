import "./Hero.css"
import * as React from "react"


export default function Hero() {
  return (
    <div className = "hero">

      <div className = "intro">
        <h1> Welcome to the Student Store </h1>
      </div>

      <div className = "image">
        <img className = "hero-img" src = "/assets/transparent_moon.png"/>
      </div>

    </div>
  )
}