import * as React from "react"
import { useState } from "react"
import "./Sidebar.css"


export default function Sidebar() {
  // const [displayCart, setDisplayCart] = useState(false)

  return (
    <section  >
      
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      
      <body>
        <div className="sidebar">
          <div className='m'>
            <i className="material-icons md-48">arrow_forward</i>
          </div>
          <div >
            <i className="material-icons md-48">add_shopping_cart</i>
          </div>
          <div>
            <i className="material-icons md-48">monetization_on</i>
          </div>
          <div>
            <i className="material-icons md-48">fact_check</i>
          </div>
        </div>
     
      </body>

    </section>
  )
}
