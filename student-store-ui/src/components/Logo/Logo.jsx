import * as React from "react"
import { Link } from "react-router-dom"

export default function Logo(){
    return(
        <div className="logo">
            <Link to="/"><img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/wfsonfv0p92plryzwijf" alt="Logo Picture" /></Link>
        </div>
    )
}