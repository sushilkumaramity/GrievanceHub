import React, { useState, useEffect } from "react";
import "./UserProfile.css";

const UserProfile = () => {
  // Pull name & email from localStorage if available
  const userData = JSON.parse(localStorage.getItem("user")) || {
    name: "John Doe",
    email: "john@example.com",
  };

  const [name, setName] = useState(userData.name);
  const [email] = useState(userData.email);
  const [role, setRole] = useState("Student");

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saving profile:", { name, email, role });
    alert("Profile updated successfully!");
    // Here you’d connect to backend to save
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: name,
        email: email,
      })
    );
  };

  return (
    <div className="user-profile-page">
      <div className="profile-card">
        <h2>Your Profile</h2>
        <form className="profile-form" onSubmit={handleSave}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={email} readOnly />

          <label htmlFor="role">Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="Student">Student</option>
            <option value="Staff">Staff</option>
          </select>

          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
