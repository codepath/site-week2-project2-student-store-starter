import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import {useEffect, useState} from "react"
import axios from "axios"
// usually put external dependencies at the top

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

const url = "https://codepath-store-api.herokuapp.com/store"
export default function App() {
  const [products, setProducts] = useState();

  // useEffect(setup, dependencies)
  // if you pass in an empty dependency aray, it will run only once
  useEffect(() => {
    axios.get(url).then((response) =>{
      setProducts(response.data.products)
      // console.log(response.data.products) // getting the food items
      // console.log(products)
    })

  }, []);
  console.log(products);



  return (
    <div className="app">
      <BrowserRouter>
        <main>
          
          {/* YOUR CODE HERE! */}
         
          {/* ? to see if we actually have it  */}
          {/* map returns whole new array with those changes, unlike for loop */}

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


      {/* <nav className="sub-navbar">Navigation</nav> */}


      </div>

          <Home products = {products}/>
          {/* {products?.map((product, index) => <p key={index}> {product.name}</p>)} */}

        </main>
      </BrowserRouter>
    </div>
  )
}

// import * as React from "react"
// import { BrowserRouter } from 'react-router-dom'
// import Navbar from "../Navbar/Navbar"
// import Sidebar from "../Sidebar/Sidebar"
// import Home from "../Home/Home"
// import "./App.css"

// export default function App() {
//   return (
//     <div className="app">
//       <BrowserRouter>
//         <main>
//           {/* YOUR CODE HERE! */}
//           <Navbar />
//           <Sidebar />
//           <Home />
//         </main>
//       </BrowserRouter>
//     </div>
//   )
// }

