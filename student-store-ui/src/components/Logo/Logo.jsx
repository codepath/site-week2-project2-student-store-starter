import * as React from "react"
import "./Logo.css"
import {Link} from 'react-router-dom';

export default function Logo() {
  return (
    <div className="logo">
        <Link to="/">
            <img 
            src="https://static.vecteezy.com/system/resources/thumbnails/004/743/496/small/online-shop-logo-vector.jpg"
            alt="Logo"></img>
        </Link>
        
    </div>
  )
}