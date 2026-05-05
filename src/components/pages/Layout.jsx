import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className="layout-container">
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout