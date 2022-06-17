import * as React from "react"
import "./Sidebar.css"

export default function Sidebar() {
  const [hidden, setHidden] = React.useState("hidden");

  const toggleHidden = () => {
    if(hidden === "hidden") {
      setHidden("unhidden");
      console.log("unhidden")
    } else {
      setHidden("hidden");
      console.log("asd");
    }
  }
  
  return (
    <section className={"sidebar " + hidden}>
      <span className="material-icons-outlined" onClick={() => {toggleHidden()}} >open_in_new</span> 
    </section>
  )
}
