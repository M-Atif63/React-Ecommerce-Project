import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                Ecommerce
            </div>
            <div className="nav-links">
                <NavLink to={'/'} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                    Dashboard
                </NavLink>
                <NavLink to={'/addnewproduct'} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                    Add New Product
                </NavLink>
                <NavLink to={'/about'} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                    About
                </NavLink>
                <NavLink to={'/contact'} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                    Contact
                </NavLink>
                <NavLink to={'/fedback'} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                    Fedback
                </NavLink>
            </div>
            <div className="logout-container">
                <NavLink to={'/logout'} className="logout-item">
                    Logout
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar