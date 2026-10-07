import { Link } from "react-router-dom";

function MyRides() {
  return (
    <div>
      <h1>🚗 CampusRide</h1>

      <h2>My Rides</h2>

      <p>View the rides you have offered or joined.</p>

      <hr />

      <h3>Rides Offered by Me</h3>

      <p>No rides offered yet.</p>

      <Link to="/offer-ride">
        <button>Offer a Ride</button>
      </Link>

      <hr />

      <h3>Rides I Joined</h3>

      <p>No rides joined yet.</p>

      <Link to="/find-ride">
        <button>Find a Ride</button>
      </Link>

      <br />
      <br />

      <Link to="/dashboard">← Back to Dashboard</Link>
    </div>
  );
}

export default MyRides;

