import * as React from "react"
import {Link} from "react-router-dom";
import "./Logo.css"

export default function Logo() {
    return (<div className="logo">
        <Link to={"/"}>
            <img src="src/images/logo.png" alt="" className="logo-img"/>
        </Link>
    </div>);
}