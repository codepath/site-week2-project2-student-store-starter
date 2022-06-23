import * as React from "react"
import "./Logo.css"
import { Link } from "react-router-dom"
import codepathLogo from "/src/assets/logo-codepath-full.png"

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src={codepathLogo} id="codepath-logo"></img>
      </Link>
    </ div>
  )
}