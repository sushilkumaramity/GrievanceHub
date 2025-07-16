import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Add this!
import "./AdminLogin.css";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // ✅ Hook to navigate

  const handleAdminLogin = (e) => {
    e.preventDefault();

    // TODO: Add real auth logic here.
    console.log("Admin logging in:", username, password);
    alert("Admin login submitted. Redirecting to dashboard...");

    // ✅ Now navigate to Admin Dashboard route:
    navigate("/admin");
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleAdminLogin}>
          <input
            type="text"
            placeholder="Admin Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login as Admin</button>
        </form>
      </div>
      
    </div>
    
  );
};

export default AdminLogin;
