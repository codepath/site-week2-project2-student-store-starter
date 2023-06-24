import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import './AppOverlay.css'
import { Outlet } from 'react-router-dom'

function AppOverlay({emptyQuantities, clearCart, cart, setCart, quantities, setQuantities, originalProducts}) {
    return (
        <div className='app-overlay'>
           
            <Sidebar emptyQuantities={emptyQuantities} clearCart={clearCart} cart={cart} setCart={setCart} className='sidebar' quantities={quantities} setQuantities={setQuantities} originalProducts={originalProducts}/>
            <Navbar/>
            <Outlet/>
        </div>
        
    )
}

export default AppOverlay
