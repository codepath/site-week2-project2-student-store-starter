import * as React from "react"
import "./Sidebar.css"


export default function Sidebar() {

  return (
    <section  >
      
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    
        <div className="sidebar">
          <div className='m'>
            <i className="material-icons md-36">arrow_forward</i>
          </div>
          <div >
            <i className="material-icons md-36">add_shopping_cart</i>
          </div>
          <div>
            <i className="material-icons md-36">monetization_on</i>
          </div>
          <div>
            <i className="material-icons md-36">fact_check</i>
          </div>
        </div>

    </section>
  )
}
