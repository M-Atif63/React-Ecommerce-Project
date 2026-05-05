import React, { useState, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { auth, onAuthStateChanged } from '../../Firebase.jsx';

const ProtectedRoute = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;
    }

    return user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;