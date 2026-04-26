import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

function NotFoundedPade() {
  return (
    <div className="notfound-container">
      <div className="notfound-box">
        <div className="notfound-code">404</div>
        <div className="notfound-divider"></div>
        <h1 className="notfound-title">Page Not Found</h1>
        <p className="notfound-desc">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="notfound-btn">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFoundedPade
