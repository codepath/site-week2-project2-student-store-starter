import * as React from "react"
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <section className="sidebar">
        <RightArrowIcon/>
    </section>
  )
}



export function RightArrowIcon() {
  return (
    <div className="right-arrow-icon">
      <i className="fa-solid fa-arrow-right-from-line"></i>
    </div>
  )
}
