
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function FindRide() {
  const location = useLocation();
  const student = location.state?.student;

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [rides, setRides] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [requestingRideId, setRequestingRideId] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setMessage("");
    setRides([]);
    setLoading(true);

    try {
      const response = await axios.get(
        "http://localhost:8080/api/rides/search",
        { params: { source, destination, travelDate } }
      );

      setRides(response.data);

      if (response.data.length === 0) {
        setMessage("No rides found for your search.");
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
        "Unable to search rides. Check whether the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleRequest = async (rideId) => {
    if (!student?.id) {
      setMessage("Please log in again to request a ride.");
      return;
    }

    setRequestingRideId(rideId);
    setMessage("");

    try {
      await axios.post("http://localhost:8080/api/ride-requests", {
        rideId,
        studentId: student.id,
      });

      setMessage("Ride request sent successfully!");
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
        "Unable to send request. Please try again."
      );
    } finally {
      setRequestingRideId(null);
    }
  };

  return (
    <div className="page">
      <div className="header">
        <div className="logo">🚗 CampusRide</div>
        <div className="nav">
          <Link to="/dashboard" state={{ student }}>Dashboard</Link>
          <Link to="/profile" state={{ student }}>Profile</Link>
        </div>
      </div>

      <h2>Find a Ride</h2>
      <p>Find students traveling in the same direction.</p>
      <hr />

      <form onSubmit={handleSearch}>
        <label>Starting Location</label><br />
        <input
          type="text"
          placeholder="Enter starting location"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />
        <br /><br />

        <label>Destination</label><br />
        <input
          type="text"
          placeholder="Enter destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
        <br /><br />

        <label>Travel Date</label><br />
        <input
          type="date"
          value={travelDate}
          onChange={(e) => setTravelDate(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search Rides"}
        </button>
      </form>

      {message && <p role="status">{message}</p>}

      {rides.length > 0 && (
        <div>
          <h3>Available Rides</h3>

          {rides.map((ride) => (
            <div className="card" key={ride.id}>
              <h3>{ride.source} → {ride.destination}</h3>
              <p>Travel Date: {ride.travelDate}</p>
              <p>Available Seats: {ride.availableSeats}</p>
              <p>Ride ID: {ride.id}</p>

              {student?.id === ride.studentId ? (
                <p>This is your ride.</p>
              ) : (
                <button
                  type="button"
                  disabled={requestingRideId === ride.id}
                  onClick={() => handleRequest(ride.id)}
                >
                  {requestingRideId === ride.id
                    ? "Sending..."
                    : "Request to Join"}
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="links">
        <Link to="/dashboard" state={{ student }}>
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default FindRide;

