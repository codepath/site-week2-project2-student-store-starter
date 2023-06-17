import *as React from "react"
import "./Hero.css"

export default function Hero (){
    return(
<div className="banner">
    <div className="media">
        {/* <h1>Welcome!</h1> */}
        <h1> Find your merch n' Slay! </h1>
       {/* <img src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg" alt="banner"className="banner-img"></img>  */}
    </div>

    {<img src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg" alt="banner"className="banner-img"></img> }
</div>
    )
}

