import * as React from "react"
import {Link} from "react-router-dom"


export default function Logo() {
  return (
    <div className = "logo">
        <Link to = "/">
            <img src = "/assets/transparent_moon.png"/>
        </Link>
    </div>
  )
}