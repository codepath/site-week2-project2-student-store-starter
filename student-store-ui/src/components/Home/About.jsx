import * as React from "react"
import "./Home.css"

export default function About() {
    return (
        <section className="text-center about">
        <h1>About US</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200" >
              <span className="fa fa-group"></span>
              <h2>Section 1</h2>
              <p className="lead">We aim to offer our customers a variety of the latest and greatest. We’ve come a long way, so we know exactly which direction to take when supplying you with high quality yet budget-friendly products. We offer all of this while providing excellent customer service and friendly support.</p>
            </div>
            <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
              <span className="fa fa-info"></span>
              <h2>Section 2 </h2>
              <p className="lead">We always keep an eye on the latest trends and put our customers’ wishes first. That is why we have satisfied customers all over the world, and are thrilled to be a part of the industry. </p>
            </div>
            <div className="clearfix visible-md-block visible-sm-block"></div>
            <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
              <span className="fa fa-file"></span>
              <h2>Section 3</h2>
              <p className="lead">The interests of our customers are always top priority for us, so we hope you will enjoy our products as much as we enjoy making them available to you. Please use the contact information below if you hate anything we have to offer! </p>
            </div>
            
          </div>
          
        </div>
      </section>
    )
  }