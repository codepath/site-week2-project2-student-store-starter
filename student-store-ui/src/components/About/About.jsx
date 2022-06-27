import * as React from "react"
import "./About.css"
import shoppingPic from "./shopping.jpeg"

export default function About() {
    return (
    <section id="about-us" className="about mb-5">
      <div className="container">
        <h2>About us</h2><hr/>
        <div className="row gy-4">
          <div className="col-lg-4">
            <img src={shoppingPic} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8">
            <div className="content ps-lg-5">
              <h3>Voluptatem dignissimos provident quasi</h3>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rerum quo dolor est sit facilis 
                reprehenderit ab esse in magnam cupiditate consectetur eligendi minus quis, architecto incidunt error ipsa maiores.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
    )
}