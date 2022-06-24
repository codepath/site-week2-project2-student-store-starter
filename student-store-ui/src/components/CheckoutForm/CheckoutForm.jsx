import "./CheckOutForm.css"

export default function CheckOutForm(props) {

    return (
        <div className={"check-out"}>
            <h1>Check Out</h1>
            
                <label htmlFor="check-out-form">Username</label>
                <input
                    name="name"
                    type="text"
                    value={props.checkoutForm?.username || ""}
                    onChange={props.handleOnCheckoutFormChange}
                />

                <label htmlFor="check-out-form">Email</label>
                <input
                    name="email"
                    type="email"
                    value={props.checkoutForm?.email || ""}
                    onChange={props.handleOnCheckoutFormChange}
                />
                <div className="terms">
                    <input required type="checkbox" name="terms" />
                    <label htmlFor="check-out-form">I have read the <a style={{color:"green"}}>terms of service</a></label>
                </div>
                <input 
                    type="submit" 
                    value="Check Out"
                    onClick={props.handleOnSubmitCheckoutForm}></input>
            
        </div>
    )
}