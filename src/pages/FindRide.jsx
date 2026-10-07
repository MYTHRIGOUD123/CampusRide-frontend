
import { Link } from "react-router-dom";
import { useState } from "react";

function FindRide() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!source || !destination || !date) {
      alert("Please fill all fields");
      return;
    }

    alert(
      `Searching rides from ${source} to ${destination} on ${date}`
    );
  };

  return (
    <div>
      <h1>🚗 CampusRide</h1>

      <h2>Find a Ride</h2>

      <p>Find students traveling in the same direction.</p>

      <hr />

      <form onSubmit={handleSearch}>
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

        <button type="submit">Search Rides</button>
      </form>

      <hr />

      <h3>Available Rides</h3>

      <p>No rides available yet.</p>

      <Link to="/dashboard">← Back to Dashboard</Link>
    </div>
  );
}

export default FindRide;

