import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"


// //import react pro sidebar components
// import {
//   ProSidebar,
//   Menu,
//   MenuItem,
//   SidebarHeader,
//   SidebarFooter,
//   SidebarContent,
// } from "react-pro-sidebar";

// import 


export const appInfo ={
  title: "Welcome! Find Your Merch!",
  tagline: "We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.",
  img_src: "./student-store-express-api/data/images.png"

}


export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          
          <Navbar />
          <Sidebar />
             {/* <SidebarHeader> */}
                {/* <div className="closeSidebar"onClick={cartClick} /> */}
                  {/* {cartClick ? (<FiArrowRightCircle/>):(<FiArrowLefttCircle/>)} */}
          {/* change to google versions  */}
              
              {/* </SidebarHeader> */}
              {/* <SidebarContent> */}
                {/* <CartItem active={true} icon= {}>
                  Home

                </CartItem> */}
          {/* </SidebarContent> */}
            
          

          <Home />
        </main>
      </BrowserRouter>
    </div>
  )
}
