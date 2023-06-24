import * as React from "react"
import codepath from "../../images/codepath.png"


export default function About() {
    return(
        <div>
    
    <h1 id="About" style={{marginLeft: '350px',
            marginTop: '90px'}}>About</h1> 

    <div className="about" style={{ 
        padding: '100px',
        backgroundColor: '#9bd1e5',
        fontSize: '20px',
        borderStyle: 'solid',
        display: 'flex',
        maxWidth:'1100px', 
        margin: '0 auto',

        }}>

        <p style={{marginTop:"-50px"}}>The codepath student store offers great products at great prices from a great team and for a great cause.
            <br />
            <br />
        We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place. <br />
            <br />
            <br />
        All proceeds go towards bringing high quality CS education to college students around the country.</p>
        
        <img src={codepath} alt="code path giant image" id="codepath" style={{ display: "flex", marginLeft:"50px", marginTop:"-70px"}}/>

    </div>
    </div>)
}

