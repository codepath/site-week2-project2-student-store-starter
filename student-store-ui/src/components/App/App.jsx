import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home';
import ProductView from '../Product/ProductView';
import './App.css';

export default function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <main>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductView />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}