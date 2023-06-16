import * as React from "react"
import "./Sidebar.css"


export default function Sidebar(props) {


  // function handleClick(event){
  //   event.target.checked = !(props.isOpen);
  //   props.setIsOpen(!(props.isOpen))

  // }
  return (
    <>
    <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        <i class="fa fa-bars"> </i>
      </label>
    <section className="sidebar">
    
      <p>Sidebar</p>
    </section>
    </>
  )
}
