import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import './AppOverlay.css'
import { Outlet } from 'react-router-dom'

function AppOverlay({quantities, setQuantities, originalProducts}) {
    return (
        <div className='app-overlay'>
           
            <Sidebar className='sidebar' quantities={quantities} updateQuantities={setQuantities} originalProducts={originalProducts}/>
            <Navbar/>
            <Outlet/>
        </div>
        
    )
}

export default AppOverlay
