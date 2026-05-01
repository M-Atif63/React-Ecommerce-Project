import React, { useState } from 'react'
import { auth, createUserWithEmailAndPassword, GoogleAuthProvider } from '../../Firebase.jsx'
import './Signup.css'
import { NavLink } from 'react-router-dom'

function Signup() {
    var [email, setEmail] = useState('')
    var [password, setPassword] = useState('')
    var [message, setMessage] = useState('')
    var [isError, setIsError] = useState(false)

    const handleSignup = async () => {
        if (email === '' || password === '') {
            setMessage("Please fill all fields");
            setIsError(true);
            return;
        }

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setMessage("Account Created Successfully!");
                setIsError(false);
            })
            .catch((error) => {
                setMessage("Account Already Exists");
                setIsError(true);
            });
    }
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user)
        } else {
        }
    });

    const handleGoogleSignup = async () => {
        const provider = new GoogleAuthProvider();

    }

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h1>Create Account</h1>
                <p></p>

                <div className="input-group">
                    <input
                        className="input-field"
                        type="email"
                        placeholder=" "
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email" className="floating-label">Email address</label>
                </div>

                <div className="input-group">
                    <input
                        className="input-field"
                        type="password"
                        placeholder=" "
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="password" className="floating-label">Password</label>
                </div>

                {message && (
                    <div className={`message ${isError ? 'error' : 'success'}`}>
                        {message}
                    </div>
                )}

                <button className='signup-btn' onClick={handleSignup}>
                    Create New Account
                </button>

                <div className="separator">OR</div>

                <button className='cont-with-google-btn' onChange={handleGoogleSignup}>
                    <svg width="18" height="18" viewBox="0 0 18 18">
                        <path fill="#4285F4" d="M17.64 9.2c0-.63-.06-1.25-.16-1.84H9v3.47h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.91c1.71-1.58 2.69-3.9 2.69-6.6z" />
                        <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.91-2.26c-.8.54-1.83.86-3.05.86-2.34 0-4.33-1.58-5.04-3.71H.95v2.33C2.43 15.89 5.5 18 9 18z" />
                        <path fill="#FBBC05" d="M3.96 10.71a4.82 4.82 0 0 1 0-3.42V4.96H.95a8.99 8.99 0 0 0 0 8.08l3.01-2.33z" />
                        <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35L15 2.47C13.46.99 11.43 0 9 0 5.5 0 2.43 2.11.95 5.04l3.01 2.33c.71-2.13 2.7-3.71 5.04-3.71z" />
                    </svg>
                    Continue with Google
                </button>

                <div className="footer-link">
                    Already have an account? <NavLink to="/login" >Login</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Signup
