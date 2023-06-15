import * as React from "react"
import logo from "../assets/logo.svg"
import "./Logo.css"

export default function Logo(){
    return (
        <div className="logo">
            <img className="logo-icon" src={logo} alt="logo"/>
        </div>
    )
}