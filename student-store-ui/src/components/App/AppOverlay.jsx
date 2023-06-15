import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import './AppOverlay.css'

function AppOverlay() {
    return (
        <div className='app-overlay'>
            <Navbar/>
            <Sidebar className='sidebar'/>
        </div>
        
    )
}

export default AppOverlay
