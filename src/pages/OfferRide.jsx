
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://campusride-backend-1.onrender.com";

function OfferRide() {
  const location = useLocation();
  const student = location.state?.student;

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [seats, setSeats] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOfferRide = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!student?.id) {
      setMessage("Student details not found. Please log in again.");
      return;
    }

    if (
      !source.trim() ||
      !destination.trim() ||
      !date ||
      !time ||
      !seats ||
      !vehicle.trim()
    ) {
      setMessage("Please fill all fields.");
      return;
    }

    if (source.trim().toLowerCase() === destination.trim().toLowerCase()) {
      setMessage("Source and destination must be different.");
      return;
    }

    if (Number(seats) < 1 || Number(seats) > 10) {
      setMessage("Available seats must be between 1 and 10.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/api/rides`, {
        studentId: student.id,
        source: source.trim(),
        destination: destination.trim(),
        travelDate: date,
        availableSeats: Number(seats),
        time,
        vehicle: vehicle.trim(),
      });

      setMessage("Ride posted successfully!");

      setSource("");
      setDestination("");
      setDate("");
      setTime("");
      setSeats("");
      setVehicle("");

      console.log("Ride created:", response.data);
    } catch (error) {
      console.error("Error offering ride:", error);

      setMessage(
        error.response?.data?.message ||
          (error.response
            ? `Could not post ride. Server returned ${error.response.status}.`
            : "Cannot reach the backend. Please check your internet connection or try again shortly.")
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
          <Link to="/dashboard" state={{ student }}>
            Dashboard
          </Link>
          <Link to="/profile" state={{ student }}>
            Profile
          </Link>
        </div>
      </div>

      <h2>Offer a Ride</h2>
      <p>Share your ride with fellow students.</p>

      <hr />

      <form onSubmit={handleOfferRide}>
        <label>Source</label>
        <br />
        <input
          type="text"
          placeholder="Enter starting location"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />

        <br /><br />

        <label>Destination</label>
        <br />
        <input
          type="text"
          placeholder="Enter destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />

        <br /><br />

        <label>Date</label>
        <br />
        <input
          type="date"
          value={date}
          min={new Date().toLocaleDateString("en-CA")}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <br /><br />

        <label>Time</label>
        <br />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <br /><br />

        <label>Available Seats</label>
        <br />
        <input
          type="number"
          min="1"
          max="10"
          placeholder="Number of seats"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          required
        />

        <br /><br />

        <label>Vehicle</label>
        <br />
        <input
          type="text"
          placeholder="Example: Honda Activa"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit" disabled={loading}>
          {loading ? "Posting..." : "Post Ride"}
        </button>
      </form>

      {message && <p role="status">{message}</p>}

      <div className="links">
        <Link to="/dashboard" state={{ student }}>
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default OfferRide;

