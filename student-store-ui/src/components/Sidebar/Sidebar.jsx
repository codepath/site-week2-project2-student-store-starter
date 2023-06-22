
// import React, { useState } from "react";
// import "./Sidebar.css";
// import { FaBars, FaTimes} from "react-icons/fa";

// import { MdShoppingCartCheckout,MdOutlineRemoveShoppingCart } from "react-icons/md";

// export default function Sidebar() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
//       <div className="sidebar-icon" onClick={toggleSidebar}>
//         {isSidebarOpen ? <MdOutlineRemoveShoppingCart /> : <MdShoppingCartCheckout />}
//       </div>
//       <div className="sidebar-content">
//         <a href="/#" className="sidebar-link">
//           Shopping Cart
//         </a>
//         <a href="/#" className="sidebar-link">
//           Checkout Form
//         </a>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import "./Sidebar.css";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { MdShoppingCartCheckout, MdOutlineRemoveShoppingCart } from "react-icons/md";
// import ShoppingCart from "../ShoppingCart/ShoppingCart";

// export default function Sidebar() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Set the initial state to `true` to make the sidebar open

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
//       <div className="sidebar-icon" onClick={toggleSidebar}>
//         {isSidebarOpen ? <MdOutlineRemoveShoppingCart /> : <MdShoppingCartCheckout />}
//       </div>
//       <div className="sidebar-content">
//         {/* Render the ShoppingCart component when the sidebar is open */}
//         {isSidebarOpen && <ShoppingCart cartItems={[]} />} {/* Pass the cartItems array as props */}
//         {/* <a href="/#" className="sidebar-link">
//           Shopping Cart
//         </a>
//         <a href="/#" className="sidebar-link">
//           Checkout Form
//         </a> */}
//         <div>
//           <ProductContainer products={products} />
//          <ShoppingCart cartItems={cartItems} /> {/* Pass the cartItems state as a prop */}
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import "./Sidebar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdShoppingCartCheckout, MdOutlineRemoveShoppingCart } from "react-icons/md";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import ProductContainer from "../ProductContainer/ProductContainer"; // Import the ProductContainer component

// export default function Sidebar() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
//       <div className="sidebar-icon" onClick={toggleSidebar}>
//         {isSidebarOpen ? <MdOutlineRemoveShoppingCart /> : <MdShoppingCartCheckout />}
//       </div>
//       <div className="sidebar-content">
//         {isSidebarOpen && <ShoppingCart cartItems={[]} />}
//         <ProductContainer products={[]} /> {/* Pass the products array as props */}
//       </div>
//     </div>
//   );
// }

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="sidebar-icon" onClick={toggleSidebar}>
        {isSidebarOpen ? <MdOutlineRemoveShoppingCart /> : <MdShoppingCartCheckout />}
      </div>
      <div className="sidebar-content">
        {isSidebarOpen && <ShoppingCart cartItems={cartItems} />}
        <ProductContainer products={[]} setCartItems={setCartItems} /> {/* Pass the setCartItems function as a prop */}
      </div>
    </div>
  );
}
