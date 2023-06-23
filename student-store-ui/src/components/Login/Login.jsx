import react from "react"
import "./Login.css"
export default function Loginform(){
    return(
        <div className="Loginform">
            <h2>Login</h2>
            <form>
                <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    <input type = "email" id = "email" placeholder="Enter Your Email"/>
                </div>
                <div className="formGroup">
                    <label htmlFor="password">Password</label>
                    <input type = "password" id = "password" placeholder="Enter Your Password"/>
                </div>
                <button type = "submit">Submit</button>
            </form>
        </div>
    )
}
