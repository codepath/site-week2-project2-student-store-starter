import * as React from "react"
import "./Sidebar.css"
import { Bars3Icon } from "@heroicons/react/24/outline"

export default function Sidebar(props) {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar"
  return (
      <section className={sidebarClass}>
      <div> Open sidebar </div>
      <button onClick={props.toggleSidebar} className="sidebar-toggle">
        <Bars3Icon />
      </button>
    </section>
  )
}