import * as React from "react"
import "./Sidebar.css"

export default function Sidebar({ label }) {
  return (
    <section className="sidebar">
      <p>{label}</p>
    </section>
  )
}
