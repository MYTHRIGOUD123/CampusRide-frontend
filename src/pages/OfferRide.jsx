
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

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

    setLoading(true);

    try {
      await axios.post("http://localhost:8080/api/rides", {
        studentId: student.id,
        source: source.trim(),
        destination: destination.trim(),
        travelDate: date,
        availableSeats: Number(seats),
        time: time,
        vehicle: vehicle.trim(),
      });

      setMessage("Ride posted successfully!");

      setSource("");
      setDestination("");
      setDate("");
      setTime("");
      setSeats("");
      setVehicle("");
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Unable to post ride. Please check whether the backend is running."
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

        <br />
        <br />

        <label>Destination</label>
        <br />
        <input
          type="text"
          placeholder="Enter destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />

        <br />
        <br />

        <label>Date</label>
        <br />
        <input
          type="date"
          value={date}
          min={new Date().toLocaleDateString("en-CA")}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <br />
        <br />

        <label>Time</label>
        <br />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <br />
        <br />

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

        <br />
        <br />

        <label>Vehicle</label>
        <br />
        <input
          type="text"
          placeholder="Example: Honda Activa"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
          required
        />

        <br />
        <br />

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

