import * as React from "react"
import codepath from "../../images/codepath.png"


export default function About() {
    return(
        <div>
    <div className="about" style={{ 
        padding: '100px',
        backgroundColor: '#9bd1e5',
        fontSize: '20px'
    }}>
        <h1>About</h1> <br></br> 
        <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
        <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
        <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
        <img src={codepath} alt="code path giant image" id="codepath" style={{ display: "flex"}}/>

    </div>
    </div>)
}
