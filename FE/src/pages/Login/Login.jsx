import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ✅ Example dummy user
  const dummyUser = {
    email: "student@example.com",
    password: "123456",
    name: "John Doe", // you can replace this with real fetched name later
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Simulate login check
    if (email === dummyUser.email && password === dummyUser.password) {
      // ✅ Save name & email to localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: dummyUser.name,
          email: dummyUser.email,
        })
      );

      alert(`Login successful! Welcome, ${dummyUser.name}`);
      navigate("/user-dashboard");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login to GrievanceHub</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="register-link">
          Don't have an account? <a href="/signup">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
