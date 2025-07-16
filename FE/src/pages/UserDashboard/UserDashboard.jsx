import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserDashboard.css";
import logo from "../Dashboard/img66.png"; // adjust path if needed

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out!");
    navigate("/login");
  };

  return (
    <div className="user-dashboard">
      <header className="user-navbar">
        <div className="navbar-left">
          <a href="/" className="nav-link">
                    <img src={logo} alt="GrievanceHub Logo" className="logo" /></a>
          <span className="user-brand-name">GrievanceHub</span>
        </div>

        <nav className="navbar-center">
          <a href="/" className="nav-link">Home</a>
          <a href="/grievance-form" className="nav-link">Grievance Form</a>
          <a href="/grievance-status" className="nav-link">Grievance Status</a>
        </nav>

        <div className="navbar-right">
          <Link to="/profile" className="nav-btn">Profile</Link>
          <Link to="/settings" className="nav-btn">Settings</Link>

          <button className="nav-btn logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      <main className="user-main">
        <h1><strong>Welcome to GrievanceHub</strong></h1>
        <p>A secure and transparent platform for submitting and tracking grievances.</p>
        <Link to="/grievance-form" className="hero-btn">Submit a New Grievance</Link>
      </main>
      
    </div>
    

    
  );
  
};

export default UserDashboard;
