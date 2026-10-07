import { Link } from "react-router-dom";
import { useState } from "react";

function OfferRide() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [seats, setSeats] = useState("");
  const [vehicle, setVehicle] = useState("");

  const handleOfferRide = (e) => {
    e.preventDefault();

    if (!source || !destination || !date || !time || !seats || !vehicle) {
      alert("Please fill all fields");
      return;
    }

    alert("Ride posted successfully!");
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
        />

        <br />
        <br />

        <label>Date</label>
        <br />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <br />
        <br />

        <label>Time</label>
        <br />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
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
        />

        <br />
        <br />

        <button type="submit">Post Ride</button>
      </form>

      <div className="links">
        <Link to="/dashboard">← Back to Dashboard</Link>
      </div>
    </div>
  );
}

export default OfferRide;

