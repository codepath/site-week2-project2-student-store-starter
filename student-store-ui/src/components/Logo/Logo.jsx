import * as React from "react"
import logo from "../assets/logo.svg"
import "./Logo.css"
import { Link } from "react-router-dom"

export default function Logo(){
    return (
        <Link to="/">
            <div className="logo">
                <img className="logo-icon" src={logo} alt="logo"/>
            </div>
        </Link>
    )
}