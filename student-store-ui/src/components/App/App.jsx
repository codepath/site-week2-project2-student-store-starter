import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
// import axios from "axios";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

//   // const url = 'https://codepath-store-api.herokuapp.com/store'

//   // const [products, setProducts] = React.useState()
//   // React.useEffect(() => {
//   //   axios.get(url).then((response) => {
//   //     console.log(response.data.products)
//   //     setProducts(response.data.products)
//   //   })
//   // }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
        <Sidebar isOpen={sidebarOpen} toggleSidebar={handleSidebarToggle} />
          {/* <Navbar /> */}
          {/* <Home /> */}
        </main>
      </BrowserRouter>
    </div>
  );
}


