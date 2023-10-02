import * as React from "react"
import "./About.css"

export default function About() {

   return (
      <div className="about" id="About">
         <div className="content">
            <h3>About</h3>
            <div className="summary">
               <div className="text">
                  <p style={{color:"white"}}>This is a mock student store website made by Fernanda Palacios in awe and admiration for her friend Jiapsyh and practice for her super-cool future SWE job.</p>
               </div>
               <div className="media"><img src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"
                  alt="codepath large"></img></div>
            </div>
         </div>
      </div>
   )
}
