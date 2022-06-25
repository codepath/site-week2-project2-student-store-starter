import * as React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

export default function Logo() {
  return (
    <div className="logo" width="112" height="28">
      <Link to="/">
      <img src="../../images/store.svg" ></img>
      </Link>
    </div>
  )
}
