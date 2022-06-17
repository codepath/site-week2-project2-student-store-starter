//import logo from "/Users/ltdeo/CodePath/tdd-student-store-starter/student-store-ui/src/components/Logo/codePathLogo.png"
//import "./Logo.css"
import{ Link } from "react-router-dom"
import * as React from "react"

export default function Logo(){
    return(
        <div className="logo"><Link to="/"><img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/wfsonfv0p92plryzwijf" alt="codepath logo"/></Link>
        </div>
    )
}
