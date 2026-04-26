import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddNewProduct from '../pages/AddNewProduct.jsx'
import About from '../pages/About.jsx'
// import Firebase from "../../Firebase.jsx"
import Contact from '../pages/Contact.jsx'
import Dashboard from '../pages/Dashboard.jsx'
import Navbar from '../navbar/Navbar.jsx'
import Logout from '../pages/Logout.jsx'
import NotFoundedPade from '../pages/NotFoundedPade.jsx'
import Fedback from '../pages/Fedback.jsx'

function Navigation() {
    return (
        <BrowserRouter>
            <div className="app-layout">
                <Navbar/>
                <div className="main-content">
                    <Routes>
                        <Route path='/' element={<Dashboard/>} />
                        <Route path='/about' element={<About />} />
                        <Route path='/addnewproduct' element={<AddNewProduct />} />
                        <Route path='/contact' element={<Contact/>} />
                        <Route path='/fedback' element={<Fedback/>}/>
                        <Route path='/logout' element={<Logout/>}/>
                        <Route path='*' element={<NotFoundedPade/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Navigation
