import * as React from "react"
import "./Logo.css"
import { Link } from "react-router-dom"

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"></img>
      </Link>
    </ div>
  )
}