
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://campusride-backend-1.onrender.com";

function RideRequests() {
  const location = useLocation();
  const student = location.state?.student;

  const [requests, setRequests] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [updatingId, setUpdatingId] = useState(null);

  const loadRequests = async () => {
    if (!student?.id) {
      setMessage("Student details not found. Please log in again.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const rideResponse = await axios.get(
        `${API_BASE_URL}/api/rides/student/${student.id}`
      );

      const ownRides = Array.isArray(rideResponse.data)
        ? rideResponse.data
        : [];

      const results = await Promise.all(
        ownRides.map(async (ride) => {
          const response = await axios.get(
            `${API_BASE_URL}/api/ride-requests/ride/${ride.id}`
          );

          return (Array.isArray(response.data) ? response.data : []).map(
            (request) => ({
              ...request,
              rideSource: ride.source,
              rideDestination: ride.destination,
              rideDate: ride.travelDate,
            })
          );
        })
      );

      const allRequests = results.flat();
      setRequests(allRequests);

      if (allRequests.length === 0) {
        setMessage("You don't have any incoming ride requests yet.");
      }
    } catch (error) {
      console.error("Error loading ride requests:", error);

      setMessage(
        error.response?.data?.message ||
          (error.response
            ? `Request failed with status ${error.response.status}.`
            : "Cannot connect to the backend. Check your connection and try again.")
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRequests();
  }, [student?.id]);

  const updateStatus = async (requestId, status) => {
    setUpdatingId(requestId);
    setMessage("");

    try {
      const response = await axios.put(
        `${API_BASE_URL}/api/ride-requests/${requestId}/status`,
        { status }
      );

      setRequests((current) =>
        current.map((request) =>
          request.id === requestId
            ? { ...request, status: response.data.status }
            : request
        )
      );

      setMessage(`Request ${status.toLowerCase()} successfully.`);
    } catch (error) {
      console.error("Error updating request:", error);

      setMessage(
        error.response?.data?.message ||
          (error.response
            ? `Request update failed with status ${error.response.status}.`
            : "Cannot connect to the backend. Please try again.")
      );
    } finally {
      setUpdatingId(null);
    }
  };

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

      <h2>Ride Requests</h2>
      <p>View requests for rides you have offered.</p>

      <hr />

      <button type="button" onClick={loadRequests} disabled={loading}>
        {loading ? "Loading..." : "Refresh Requests"}
      </button>

      {message && <p role="status">{message}</p>}

      {requests.map((request) => (
        <div className="card" key={request.id}>
          <h3>
            {request.rideSource} → {request.rideDestination}
          </h3>

          <p>Travel Date: {request.rideDate}</p>
          <p>Request ID: {request.id}</p>
          <p>Student ID: {request.studentId}</p>
          <p>
            Status: <strong>{request.status}</strong>
          </p>

          {request.status === "PENDING" && (
            <div>
              <button
                type="button"
                disabled={updatingId === request.id}
                onClick={() => updateStatus(request.id, "ACCEPTED")}
              >
                {updatingId === request.id ? "Updating..." : "Accept"}
              </button>{" "}
              <button
                type="button"
                disabled={updatingId === request.id}
                onClick={() => updateStatus(request.id, "REJECTED")}
              >
                {updatingId === request.id ? "Updating..." : "Reject"}
              </button>
            </div>
          )}
        </div>
      ))}

      <div className="links">
        <Link to="/dashboard" state={{ student }}>
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default RideRequests;

