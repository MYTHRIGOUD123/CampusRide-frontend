import { Link } from "react-router-dom";

function RideRequests() {
  const handleAccept = () => {
    alert("Ride request accepted!");
  };

  const handleReject = () => {
    alert("Ride request rejected!");
  };

  return (
    <div className="page">
      <div className="header">
        <div className="logo">🚗 CampusRide</div>

        <div className="nav">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </div>

      <h2>Ride Requests</h2>

      <p>Manage requests from students who want to join your ride.</p>

      <hr />

      <h3>Pending Requests</h3>

      <div className="card">
        <p>
          <strong>Student:</strong> Rahul
        </p>

        <p>
          <strong>Source:</strong> College
        </p>

        <p>
          <strong>Destination:</strong> Hyderabad
        </p>

        <p>
          <strong>Date:</strong> 15-10-2026
        </p>

        <button onClick={handleAccept}>Accept</button>{" "}
        <button onClick={handleReject}>Reject</button>
      </div>

      <p>No more pending requests.</p>

      <div className="links">
        <Link to="/dashboard">← Back to Dashboard</Link>
      </div>
    </div>
  );
}

export default RideRequests;
