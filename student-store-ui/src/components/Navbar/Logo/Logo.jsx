import "./Logo.css"
// import Link from "react"
import { Link } from "react-router-dom"

export default function Logo(){
    return(
        <div className="logo">
            <Link to = "/">
            <img src="../../src/logo.jpeg" alt="logo of codepath" />
            </Link>
        </div>
        
    )
}