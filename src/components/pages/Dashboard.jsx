import React, { useState, useEffect } from 'react'
import { auth, onAuthStateChanged } from '../../Firebase.jsx'
import { Link } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    // Mock data for elements
    const recentOrders = [
        { id: '#1234', product: 'Nike Air Max', date: '2024-05-01', price: '$120', status: 'completed' },
        { id: '#1235', product: 'iPhone 15 Pro', date: '2024-05-03', price: '$999', status: 'processing' },
        { id: '#1236', product: 'MacBook Air', date: '2024-05-04', price: '$1200', status: 'pending' },
    ];

    return (
        <div className="dashboard-container">
            {/* 1. Welcome Section Element */}
            <div className="welcome-section">
                <img 
                    src={user?.photoURL || "https://ui-avatars.com/api/?name=" + (user?.displayName || 'User') + "&background=random"} 
                    alt="User" 
                    className="user-avatar"
                />
                <div className="welcome-text">
                    <h1>Hello, {user?.displayName || user?.email?.split('@')[0] || 'User'}!</h1>
                    <p>Welcome to your personal ecommerce dashboard.</p>
                </div>
            </div>

            {/* 2. Stats Cards Elements */}
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon" style={{ background: '#eef2ff', color: '#4f46e5' }}>📊</div>
                    <div className="stat-info">
                        <h3>$12,450</h3>
                        <p>Total Revenue</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ background: '#f0fdf4', color: '#10b981' }}>🛒</div>
                    <div className="stat-info">
                        <h3>24</h3>
                        <p>Total Orders</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ background: '#fff7ed', color: '#f97316' }}>👥</div>
                    <div className="stat-info">
                        <h3>1.2k</h3>
                        <p>Total Customers</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ background: '#fdf2f2', color: '#ef4444' }}>📦</div>
                    <div className="stat-info">
                        <h3>8</h3>
                        <p>Low Stock</p>
                    </div>
                </div>
            </div>

            {/* 3. Recent Orders Table Element */}
            <div className="recent-orders">
                <h2>Recent Transactions</h2>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Product</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map((order, index) => (
                                <tr key={index}>
                                    <td>{order.id}</td>
                                    <td>{order.product}</td>
                                    <td>{order.date}</td>
                                    <td>{order.price}</td>
                                    <td>
                                        <span className={`status-badge status-${order.status}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* 4. Quick Actions Element */}
            <div className="quick-actions">
                <h2>Manage Your Store</h2>
                <div className="action-btns">
                    <Link to="/addnewproduct" className="action-btn btn-primary">
                        <span>🚀 Add New Product</span>
                    </Link>
                    <Link to="/purchase" className="action-btn btn-secondary">
                        <span>🛍️ View Inventory</span>
                    </Link>
                    <Link to="/fedback" className="action-btn btn-secondary">
                        <span>💬 Check Feedback</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard