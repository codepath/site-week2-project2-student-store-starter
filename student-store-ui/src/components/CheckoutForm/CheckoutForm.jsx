import "./CheckOutForm.css"

export default function CheckOutForm(props) {
    return (
        <div className={"check-out"}>
            <h1>Log in</h1>
            <form>
                <label htmlFor="check-out-form">Username</label>
                <input
                    name="username"
                    type="text"
                // value={props.searchQuery}
                // onChange={(e) => props.setSearchQuery(e.target.value)}
                />

                <label htmlFor="check-out-form">Password</label>
                <input
                    name="username"
                    type="password"
                // value={props.searchQuery}
                // onChange={(e) => props.setSearchQuery(e.target.value)}
                />
                
                <input type="submit" value="Log In"></input>
            </form>
        </div>
    )
}