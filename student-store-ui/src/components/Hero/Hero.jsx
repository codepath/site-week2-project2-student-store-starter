import * as React from "react"
import "./Hero.css"

export default function Hero() {
  return (
    <div className="hero">
        <div className="herocontent">
            <div className="intro">
                <h1>Welcome to my Student Store! 🛒 </h1>
                <h2>Shop 'Til You Drop!</h2>
            </div>
            <div className="heroimg">
                <img src="https://cdn.icon-icons.com/icons2/1706/PNG/512/3986701-online-shop-store-store-icon_112278.png"></img>
            </div>
        </div>
    </div>
  )
}