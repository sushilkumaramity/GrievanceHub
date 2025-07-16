import React from "react";
import "./Dashboard.css";
import logo from "../Dashboard/img66.png"; // Your logo

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="navbar">
        <div className="navbar-left">
          <a href="/" className="nav-link">
            <img src={logo} alt="GrievanceHub Logo" className="logo" />
          </a>
          <span className="brand-name">GrievanceHub</span>
        </div>

        <nav className="navbar-center">
          <a href="/" className="nav-link">Home </a>
          <a href="/login" className="nav-link"> Grievance Form </a>
          <a href="/about" className="nav-link"> About </a>
          <a href="/contact" className="nav-link"> Contact Us</a>
        </nav>

        <div className="navbar-right">
          <a href="/login" className="nav-btn register-btn">Login/Register</a>
          <a href="/admin-login" className="nav-btn admin-btn">Admin Login</a>
        </div>
      </header>

      <main className="hero-section">
        <h1>Welcome to GrievanceHub</h1>
        <p>A secure and transparent platform for submitting and tracking grievances.</p>
        <a href="/login" className="hero-btn">Submit a Grievance</a>
      </main>

      <footer className="footer">
        © 2025 GrievanceHub - Grievance Redressal System | All Rights Reserved
      </footer>
    </div>
  );
};

export default Dashboard;
