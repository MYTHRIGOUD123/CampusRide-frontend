
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!email.trim() || !password) {
      setMessage("Please enter email and password");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/students/login",
        {
          email: email.trim(),
          password: password,
        }
      );

      setMessage(response.data.message || "Login successful!");

    setTimeout(() => {
  navigate("/dashboard", {
    state: {
      student: response.data,
    },
  });
}, 800);
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Login failed. Please check if the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="header">
        <div className="logo">🚗 CampusRide</div>

        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>

      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <label>College Email</label>
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br />
        <br />

        <label>Password</label>
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br />
        <br />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        {message && <p role="status">{message}</p>}
      </form>

      <div className="links">
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>

        <Link to="/">← Back to Home</Link>
      </div>
    </div>
  );
}

export default Login;
