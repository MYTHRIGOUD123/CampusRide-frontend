
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>🚗 CampusRide</h1>

      <h2>Welcome to CampusRide!</h2>

      <p>What would you like to do today?</p>

      <hr />

      <h3>Find a Ride</h3>
      <p>Find students traveling in the same direction.</p>
      <Link to="/find-ride">
        <button>Find a Ride</button>
      </Link>

      <br />
      <br />

      <h3>Offer a Ride</h3>
      <p>Have a vehicle? Share your ride with fellow students.</p>
      <Link to="/offer-ride">
        <button>Offer a Ride</button>
      </Link>

      <br />
      <br />

      <h3>My Rides</h3>
      <p>View your offered and joined rides.</p>
      <Link to="/my-rides">
        <button>My Rides</button>
      </Link>

      <br />
      <br />

      <h3>Ride Requests</h3>
      <p>Manage requests from other students.</p>
      <Link to="/ride-requests">
        <button>Ride Requests</button>
      </Link>

      <br />
      <br />

      <h3>Profile</h3>
      <Link to="/profile">
        <button>My Profile</button>
      </Link>

      <br />
      <br />

      <Link to="/">
        Logout
      </Link>
    </div>
  );
}

export default Dashboard;


