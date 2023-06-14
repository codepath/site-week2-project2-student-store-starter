import * as React from "react"
import logo from '../../images/code_path_logo.jpeg'
import "./Logo.css"

export default function Logo(){
    return(
    <div className="logo">
        <img src={logo} alt="image of code path logo"/>
    </div>
    )
}