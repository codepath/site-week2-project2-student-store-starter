import react from "react"
import "./Login.css"
export default function Loginform({SetName, SetEmail}){
    return(
        <div className="Loginform">
            <h2>Checkout Info</h2>
            <form>
                <div className="formGroup">
                    <label htmlFor="name">Name</label>
                    <input type = "name" id = "name" placeholder="Enter Your Name" onChange={(event) => {SetName(event.target.value)}}/>
                </div>
                <div className="formGroup">
                    <label htmlFor="Email">Email</label>
                    <input type = "Email" id = "Email" placeholder="Enter Your Email" onChange={(event) => {SetEmail(event.target.value)}}/>
                </div>
            </form>
        </div>
    )
}
