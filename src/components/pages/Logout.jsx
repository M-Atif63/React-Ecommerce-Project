import React, { useEffect } from 'react'
import { auth, signOut } from '../../Firebase.jsx'
import { useNavigate } from 'react-router-dom'

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        const performLogout = async () => {
            try {
                await signOut(auth);
                navigate('/login');
            } catch (error) {
                console.error("Error signing out:", error);
            }
        };

        performLogout();
    }, [navigate]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h2>Logging out...</h2>
        </div>
    )
}

export default Logout