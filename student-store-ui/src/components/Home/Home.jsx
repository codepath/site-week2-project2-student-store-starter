import * as React from "react"
import "./Home.css"
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
// import About from "../About"
import {useEffect, useState} from "react"
import { Link } from 'react-router-dom'
import SubnavBar from "../SubnavBar/SubnavBar"
import About from "../About/About"
import Contact from '../Contact/Contact'



export default function Home({products, formData, handleInput, changeCategory}) {
  // pass in changecategory as a prop
  
  const num_in_cart=0;
  // const [formData, setFormData] = useState(""); // useState for searching

  return (

    // <SubnavBar/>

    <div className="home">
      <SubnavBar formData={formData} handleInput={handleInput} changeCategory={changeCategory} />
      {/* <p>Home</p> */}
      <div className = "hero">
        <div className="content">
          <div className = "intro">
            <h1> Welcome!!</h1>
            <h1> Find Your Merch!!</h1>
            <p> We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p>
          </div>
          <div className="media">
            <img src={"https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"} alt="hero" className="hero_img"></img>
          </div>
        </div>
      </div>
      <div id="Buy" className = "product-grid">
        <div className="content">
        
          <h3>Best Selling Products</h3>

          <div className="grid">
            {/* {selectedCategory != "All Categories" ? */}
            {/* {products?.filter((item) => {
              return ((selectedCategory == "All Categories") || (item.category === selectedCategory));
            })}; */}

          
            {console.log("Home component products",products)}
        
            {products?.map((product, index) => {
            // have to put additional return bc => has implicit return
            // const currentMenuItems = data.filter((item) => {
            //   return item.food_category === selectedCategory && item.restaurant === selectedRestaraunt;
            // });
            
            
              return <div className="product-card" key={index} >
                <img src={product.image} ></img>
                {/* {onClick={() => selectSearchEntry(searchEntry)}} */}


                <div className="product-info">
                  <div className="main-info">
                      <p className="product-name">{product.name}</p>
                      <div className="stars">
                        <img src={"https://assets.stickpng.com/images/580b585b2edbce24c47b2913.png"} alt="star ratings" className="star-rating"
                        style={{width: "20px", height: "20px"}}></img>
                        <img src={"https://assets.stickpng.com/images/580b585b2edbce24c47b2913.png"} alt="star ratings" className="star-rating"
                        style={{width: "20px", height: "20px"}}></img>
                        <img src={"https://assets.stickpng.com/images/580b585b2edbce24c47b2913.png"} alt="star ratings" className="star-rating"
                        style={{width: "20px", height: "20px"}}></img>
                        <img src={"https://assets.stickpng.com/images/580b585b2edbce24c47b2913.png"} alt="star ratings" className="star-rating"
                        style={{width: "20px", height: "20px"}}></img>
                        {/* <img src={"https://www.pngitem.com/pimgs/m/610-6107201_transparent-half-of-a-star-hd-png-download.png"} alt="star ratings" className="star-rating"
                        style={{width: "20px", height: "20px"}}></img> HALF STAR?? */} 
                        </div>
                      <p className="product-price">{"$"+product.price}</p>
                  </div>
                <div className="actions">
                  <div className="buttons">
                    <button className="add">
                      <i className="material-icons">add</i>
                    </button>
                    <button className="remove">
                      <i className="material-icons">remove</i>
                    </button>
                  </div>
                  <span className="quantity">
                    <span className="amt">{num_in_cart}</span>
                  </span>
                </div>

              </div>
            </div> })}
          </div>
        </div>
      </div>
      <About />
      <Contact />

    {/* <Outlet/> */}

   </div>
  )
}