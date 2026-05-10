import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
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
import Layout from '../pages/Layout.jsx'
import ProtectedRoute from '../pages/ProtectedRoute.jsx'
import ProductData from '../pages/ProductData.jsx'
import ProductDetails from '../pages/ProductDetails.jsx'

function Navigation() {
    return (
        <BrowserRouter>
            <div className="app-layout">
                <Routes>
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='*' element={<NotFoundedPade />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path='/' element={<Layout />} >
                            <Route index element={<Dashboard />} />
                            <Route path='products' element={<ProductData />} />
                            <Route path='products/:id' element={<ProductDetails />} />                           
                            <Route path='about' element={<About />} />
                            <Route path='addnewproduct' element={<AddNewProduct />} />
                            <Route path='contact' element={<Contact />} />
                            <Route path='fedback' element={<Fedback />} />
                            <Route path='logout' element={<Logout />} />
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Navigation
