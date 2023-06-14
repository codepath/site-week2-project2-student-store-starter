import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
      
        <div className="logo"><a href=""><img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg" alt="codepath logo" /></a></div>
        <div className="socials">
        </div>
        <ul className="links">
          <li><a href="">Home</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">Buy Now</a></li>
        </ul>
     
      </div>
    </nav>
  )
}


// export default function Navbar() {
//   return (
    
//     <nav className="navbar">
//       
//     </nav>
//   );
// }