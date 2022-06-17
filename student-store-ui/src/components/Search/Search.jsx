import * as React from "react"
import "./Search.css"
import {useState} from "react"

export default function Search(props) {

    
    return (
    <div className="search">
       
        <div className="form-input">
            
            <input className="bar" name="query" type="text" placeholder="Search..." onChange={props.handleOnSearchChange}/>
            <button className="btn submit">Enter</button>

        </div>
    </div>
    )
  
}
