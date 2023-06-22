import * as React from "react"

export default function Footer () {
    return(
<div className="footer" style={{
    backgroundColor: '#9bd1e5', 
    marginTop:'200px',
    display:'inline-block',
       }}>

        <span style={{float:'left', padding:'40px', marginLeft:'20%'}}>
            <p style={{fontWeight:'bold'}}>Categories</p>
            <p>All Categories</p>
            <p>Clothing</p>
            <p>Food</p>
            <p>Accessories</p>
            <p>Tech</p>
        </span>

        <span style={{float:'left', padding:'40px'}}>
        <p style={{fontWeight:'bold'}}>Company</p>
            <p>About Us</p>
            <p>Find A Store</p>
            <p>Terms</p>
            <p>Sitemap</p>
            <p>Careers</p>
        </span>

        <span style={{float:'left', padding:'40px', }}>
        <p style={{fontWeight:'bold'}}>Support</p>
            <p>Contact Us</p>
            <p>Money Refund</p>
            <p>Order Status</p>
            <p>Shipping Info</p>
            <p>Open Dispute</p>
        </span>

        <span style={{float:'left', padding:'40px'}}>
        <p style={{fontWeight:'bold'}}>Account</p>
            <p>Login</p>
            <p>Register</p>
            <p>Account Setting</p>
            <p>My Orders</p>
        </span>

        <span style={{float:'left', padding:'40px'}}>
        <p style={{fontWeight:'bold'}}>Socials</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p>Instagram</p>
            <p>YouTube</p>
        </span>
    </div>)
}

