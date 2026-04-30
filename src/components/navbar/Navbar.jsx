import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <span className="logo-dot"></span>
                Small Things
            </div>

            {/* Hamburger Button for Mobile */}
            <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            <div className={`nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
                <div className="nav-links">
                    <NavLink to={'/'} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} onClick={() => setIsMenuOpen(false)}>
                        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink to={'/purchase'} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} onClick={() => setIsMenuOpen(false)}>
                        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        <span>Purchase</span>
                    </NavLink>

                    <NavLink to={'/about'} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} onClick={() => setIsMenuOpen(false)}>
                        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                        <span>About</span>
                    </NavLink>

                    <NavLink to={'/fedback'} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} onClick={() => setIsMenuOpen(false)}>
                        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                        <span>Fedback</span>
                    </NavLink>

                    <NavLink to={'/contact'} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} onClick={() => setIsMenuOpen(false)}>
                        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <span>Contact</span>
                    </NavLink>

                    <NavLink to={'/addnewproduct'} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} onClick={() => setIsMenuOpen(false)}>
                        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"></path></svg>
                        <span>Sell</span>
                    </NavLink>
                </div>

                <div className="logout-container">
                    <NavLink to={'/logout'} className="logout-item" onClick={() => setIsMenuOpen(false)}>
                        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                        <span>Logout</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar


