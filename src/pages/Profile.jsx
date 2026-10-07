
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
    <div>
      <h1>🚗 CampusRide</h1>

      <h2>My Profile</h2>

      <p>View and update your profile information.</p>

      <hr />

      <form onSubmit={handleSave}>
        <div>
          <label>Full Name</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>College Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Phone Number</label>
          <br />
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Save Profile</button>
      </form>

      <hr />

      <h3>My Account</h3>

      <p>Account Type: Student</p>

      <br />

      <Link to="/dashboard">← Back to Dashboard</Link>
    </div>
  );
}

export default Profile;
