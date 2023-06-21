import * as React from "react"
import "./Sidebar.css"

export default function Sidebar() {

  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <section className="sidebar" style={{width: isOpen ? "30%" : "3%"}}>
      <button onClick={()=>{setIsOpen(!isOpen)}} >  { isOpen ? ('<=') : ('=>') } </button>
      {
        isOpen ? (<>oopen</>) : (<>closed</>)
      }

    </section>

  )
}

