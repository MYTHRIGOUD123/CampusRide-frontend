
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Profile() {
  const location = useLocation();
  const navigate = useNavigate();

  const student = location.state?.student;

  const [name, setName] = useState(student?.name || "Student");
  const [email, setEmail] = useState(student?.email || "");
  const [phone, setPhone] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();

    if (!student?.id) {
      alert("Student details not found. Please log in again.");
      return;
    }

    if (!name.trim() || !email.trim()) {
      alert("Please enter your name and email.");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:8080/api/students/${student.id}`,
        {
          name: name.trim(),
          email: email.trim(),
        }
      );

      alert(response.data.message || "Profile updated successfully!");

      navigate("/dashboard", {
        state: { student: response.data },
        replace: true,
      });
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Unable to update profile. Check whether the backend is running."
      );
    }
  };

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <div className="page">
      <div className="header">
        <div className="logo">🚗 CampusRide</div>

        <div className="nav">
          <Link to="/dashboard" state={{ student }}>
            Dashboard
          </Link>

          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <h2>My Profile</h2>

      <p>View and update your profile information.</p>

      <hr />

      <form onSubmit={handleSave}>
        <label>Full Name</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          required
        />

        <br />
        <br />

        <label>College Email</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your college email"
          required
        />

        <br />
        <br />

        <label>Phone Number</label>
        <br />
        <input
          type="tel"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Save Profile</button>
      </form>

      <hr />

      <h3>My Account</h3>

      <div className="card">
        <p>Account Type: Student</p>
        <p>Registered Email: {student?.email || email}</p>
      </div>

      <div className="links">
        <Link to="/dashboard" state={{ student }}>
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default Profile;
