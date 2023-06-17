import * as React from "react"
import "./Sidebar.css"

export default function Sidebar() {

  const [activeSidebar, activeSidebarSetter] = React.useState(false)

  function changeSidebar(status) {
    activeSidebarSetter(!status)
   }

  return (
    <section className="sidebar" style={{'width':`${activeSidebar ? '300px' : '80px'}`}}>
      <button id="change-sidebar-btn" onClick={() => changeSidebar(activeSidebar)}>Open Sidebar</button>
    </section>
  )
}
