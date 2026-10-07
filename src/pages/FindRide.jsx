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

    alert(`Searching rides from ${source} to ${destination} on ${date}`);
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

      <h2>Find a Ride</h2>

      <p>Find students traveling in the same direction.</p>

      <hr />

      <form onSubmit={handleSearch}>
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

        <button type="submit">Search Rides</button>
      </form>

      <hr />

      <h3>Available Rides</h3>

      <div className="card">
        <p>No rides available yet.</p>
      </div>

      <div className="links">
        <Link to="/dashboard">← Back to Dashboard</Link>
      </div>
    </div>
  );
}

export default FindRide;

