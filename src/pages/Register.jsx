
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!name.trim() || !email.trim() || !password) {
      setMessage("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/students/register",
        {
          name: name.trim(),
          email: email.trim(),
          password: password,
        }
      );

      setMessage(response.data.message || "Registration successful!");

      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Registration failed. Please check if the backend is running."
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
          <Link to="/login">Login</Link>
        </div>
      </div>

      <h2>Create Account</h2>

      <form onSubmit={handleRegister}>
        <label>Full Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br />
        <br />

        <label>College Email</label>
        <br />
        <input
          type="email"
          placeholder="Enter your college email"
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
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
        />

        <br />
        <br />

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>

        {message && <p role="status">{message}</p>}
      </form>

      <div className="links">
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>

        <Link to="/">← Back to Home</Link>
      </div>
    </div>
  );
}

export default Register;
