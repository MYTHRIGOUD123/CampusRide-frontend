import { Link } from "react-router-dom";
import { useState } from "react";

function Profile() {
  const [name, setName] = useState("Student");
  const [email, setEmail] = useState("student@college.com");
  const [phone, setPhone] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <div className="page">
      <div className="header">
        <div className="logo">🚗 CampusRide</div>

        <div className="nav">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/">Logout</Link>
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
        />

        <br />
        <br />

        <label>College Email</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      </div>

      <div className="links">
        <Link to="/dashboard">← Back to Dashboard</Link>
      </div>
    </div>
  );
}

export default Profile;
