import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import About from "../About/About";
import "./App.css";
import Footer from "../Footer/Footer";

export default function App() {

  return (
    <div className="app-container">
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<About />} />
      </Routes>
        {/* <main className="app-content"> */}
          {/* <Navbar /> */}
          {/* <Sidebar /> */}
          {/* <Home /> */}
          {/* <Footer /> */}
        {/* </main> */}
      </BrowserRouter>
    </div>
  )
}
