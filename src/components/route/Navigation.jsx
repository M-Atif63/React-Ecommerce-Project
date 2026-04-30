import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddNewProduct from '../pages/AddNewProduct.jsx'
import About from '../pages/About.jsx'
// import Firebase from "../../Firebase.jsx"
import Contact from '../pages/Contact.jsx'
import Navbar from '../navbar/Navbar.jsx'
import Logout from '../pages/Logout.jsx'
import NotFoundedPade from '../pages/NotFoundedPade.jsx'
import Fedback from '../pages/Fedback.jsx'
import Signup from '../pages/Signup.jsx'
import Login from '../pages/Login.jsx'
import Dashboard from '../pages/Dashboard.jsx'
import Purchase from '../pages/Purchase.jsx'

function Navigation() {
    return (
        <BrowserRouter>
            <div className="app-layout">
                <Navbar />
                <div className="main-content">
                    <Routes>
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/' element={<Dashboard/>} />
                        <Route path='/purchase' element={<Purchase />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/addnewproduct' element={<AddNewProduct />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/fedback' element={<Fedback />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='*' element={<NotFoundedPade />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Navigation
