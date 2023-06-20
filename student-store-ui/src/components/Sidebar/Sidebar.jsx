import * as React from "react"
import "./Sidebar.css"
import { useState } from 'react'

export default function Sidebar() {

  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      {/* Sidebar content will go here */}
      <button onClick={toggleSidebar}>Open</button>
    </div>
  );

}



