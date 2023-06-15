import { BrowserRouter, Outlet, Route, Routes, useParams } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import Shop from '../Shop/Shop';
import About from "../About/About";
import Contact from '../Contact/Contact';
import Footer from "../Footer/Footer";



export default function App() {

  return (
    <div className="app-container">
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Overlay />}>
            <Route path="/" element={<Home />}/>
            <Route path="/Shop" element={<Shop />}/>
            <Route path="product/:id" element={<ProductDetails />} />
          </Route>
      </Routes>
      {/* <main className="app-content">
      </main> */}
      </BrowserRouter>
    </div>
  )
}
function ProductDetails(){
  // let productID = useParams().id;
  return (
    <p>product details display here</p>
  )
}
function Overlay() {
  // ensures nav bar and side bar
  // appear on almost all pages
  return (
    <>
      <Navbar />
      <Sidebar />
      <Footer />
      <Outlet />
    </>
  );
}