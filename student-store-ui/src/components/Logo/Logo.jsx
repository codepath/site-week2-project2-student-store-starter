import * as React from "react"
import "./Logo.css"
import {Link} from 'react-router-dom';

export default function Logo() {
// "https://static.vecteezy.com/system/resources/thumbnails/004/743/496/small/online-shop-logo-vector.jpg"

  return (
    <div className="logo">
        <Link to="/">
            <img 
            src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"
            alt="Logo"></img>
        </Link>
        
    </div>
  )
}