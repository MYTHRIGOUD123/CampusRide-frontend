
import { Link } from "react-router-dom";

function RideRequests() {
  const handleAccept = () => {
    alert("Ride request accepted!");
  };

  const handleReject = () => {
    alert("Ride request rejected!");
  };

  return (
    <div>
      <h1>🚗 CampusRide</h1>

      <h2>Ride Requests</h2>

      <p>Manage requests from students who want to join your ride.</p>

      <hr />

      <h3>Pending Requests</h3>

      <div>
        <p><strong>Student:</strong> Rahul</p>
        <p><strong>Source:</strong> College</p>
        <p><strong>Destination:</strong> Hyderabad</p>
        <p><strong>Date:</strong> 15-10-2026</p>

        <button onClick={handleAccept}>Accept</button>
        {" "}
        <button onClick={handleReject}>Reject</button>
      </div>

      <hr />

      <p>No more pending requests.</p>

      <Link to="/dashboard">← Back to Dashboard</Link>
    </div>
  );
}

export default RideRequests;

