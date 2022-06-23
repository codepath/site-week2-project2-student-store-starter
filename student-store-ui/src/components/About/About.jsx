import * as React from "react"
import "./About.css"

export default function About() {
  return (
    <div className="about" id="About">
      <div className="content">
        <div className="summary">
          <h3>About</h3>
          <div className="description-column">
          <div className="text">
            <p>"The codepath student store offers products at great prices from a great team and for a great cause"</p>
            <p>"The codepath student store offers products at great prices from a great team and for a great cause"</p>
            <p>"The codepath student store offers products at great prices from a great team and for a great cause"</p>
          </div>
          </div>
          <div className="image-column">
            <div className="media">
              <img src="https://i.pinimg.com/originals/c8/4c/34/c84c346b3f81654f824855c5a3281dbd.gif" height="400px" width="400px" alt="logo"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}