
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

    if (
      !source ||
      !destination ||
      !date ||
      !time ||
      !seats ||
      !vehicle
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Ride posted successfully!");
  };

  return (
    <div>
      <h1>🚗 CampusRide</h1>

      <h2>Offer a Ride</h2>

      <p>Share your ride with fellow students.</p>

      <hr />

      <form onSubmit={handleOfferRide}>
        <div>
          <label>Source</label>
          <br />
          <input
            type="text"
            placeholder="Enter starting location"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Destination</label>
          <br />
          <input
            type="text"
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Date</label>
          <br />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Time</label>
          <br />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <br />

        <div>
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
        </div>

        <br />

        <div>
          <label>Vehicle</label>
          <br />
          <input
            type="text"
            placeholder="Example: Honda Activa"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Post Ride</button>
      </form>

      <hr />

      <Link to="/dashboard">← Back to Dashboard</Link>
    </div>
  );
}

export default OfferRide;

