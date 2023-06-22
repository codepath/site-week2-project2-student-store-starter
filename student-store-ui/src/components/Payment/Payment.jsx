import * as React from "react";
import PaymentIcon from "remixicon-react/MoneyDollarCircleFillIcon"
import "./Payment.css";


export default function Payment () {


    return(
<div className="payment" >
    <span>
    <PaymentIcon/>
    </span>
    <h3>Payment Info</h3>
        <label className="form-label" htmlFor="name">Name:</label>
        <input className="form-input"
        name="student-name" placeholder="Student Name"/> <br></br>
        <label className="form-label" htmlFor="password">Password:</label>
        <input className="form-input"
        name="student-name" placeholder="Student@codepath.org"/>
</div>
        )
}
   