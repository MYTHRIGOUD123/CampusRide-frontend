
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function MyRides() {
  const location = useLocation();
  const student = location.state?.student;

  const [offeredRides, setOfferedRides] = useState([]);
  const [sentRequests, setSentRequests] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const loadMyRides = async () => {
    if (!student?.id) {
      setMessage("Student details not found. Please log in again.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const [ridesResponse, requestsResponse] = await Promise.all([
        axios.get(
          `http://localhost:8080/api/rides/student/${student.id}`
        ),
        axios.get(
          `http://localhost:8080/api/ride-requests/student/${student.id}`
        ),
      ]);

      setOfferedRides(ridesResponse.data);
      setSentRequests(requestsResponse.data);

      if (
        ridesResponse.data.length === 0 &&
        requestsResponse.data.length === 0
      ) {
        setMessage("You haven't offered or requested any rides yet.");
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
        "Unable to load your rides. Check whether the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMyRides();
  }, [student?.id]);

  return (
    <div className="page">
      <div className="header">
        <div className="logo">🚗 CampusRide</div>

        <div className="nav">
          <Link to="/dashboard" state={{ student }}>
            Dashboard
          </Link>
          <Link to="/profile" state={{ student }}>
            Profile
          </Link>
        </div>
      </div>

      <h2>My Rides</h2>
      <p>View rides you offered and requests you sent.</p>

      <button
        type="button"
        onClick={loadMyRides}
        disabled={loading}
      >
        {loading ? "Loading..." : "Refresh"}
      </button>

      {message && <p role="status">{message}</p>}

      <hr />

      <h3>🚘 Rides I Offered</h3>

      {offeredRides.length === 0 ? (
        <p>You haven't offered any rides yet.</p>
      ) : (
        offeredRides.map((ride) => (
          <div className="card" key={ride.id}>
            <h4>{ride.source} → {ride.destination}</h4>
            <p>Ride ID: {ride.id}</p>
            <p>Travel Date: {ride.travelDate}</p>
            <p>Available Seats: {ride.availableSeats}</p>
          </div>
        ))
      )}

      <hr />

      <h3>📩 Requests I Sent</h3>

      {sentRequests.length === 0 ? (
        <p>You haven't requested to join any rides yet.</p>
      ) : (
        sentRequests.map((request) => (
          <div className="card" key={request.id}>
            <p>Ride ID: {request.rideId}</p>
            <p>
              Status: <strong>{request.status}</strong>
            </p>
            <p>Requested At: {request.requestedAt}</p>
          </div>
        ))
      )}

      <div className="links">
        <Link to="/dashboard" state={{ student }}>
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default MyRides;
