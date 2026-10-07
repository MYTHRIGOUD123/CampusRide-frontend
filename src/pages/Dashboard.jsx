import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="page">
      <div className="header">
        <div className="logo">🚗 CampusRide</div>

        <div className="nav">
          <Link to="/profile">Profile</Link>
          <Link to="/">Logout</Link>
        </div>
      </div>

      <h2>Welcome to CampusRide!</h2>

      <p>What would you like to do today?</p>

      <hr />

      <div className="card">
        <h3>🔍 Find a Ride</h3>
        <p>Find students traveling in the same direction.</p>

        <Link to="/find-ride">
          <button>Find a Ride</button>
        </Link>
      </div>

      <div className="card">
        <h3>🚘 Offer a Ride</h3>
        <p>Share your available seats with fellow students.</p>

        <Link to="/offer-ride">
          <button>Offer a Ride</button>
        </Link>
      </div>

      <div className="card">
        <h3>🚗 My Rides</h3>
        <p>View your offered and joined rides.</p>

        <Link to="/my-rides">
          <button>My Rides</button>
        </Link>
      </div>

      <div className="card">
        <h3>📩 Ride Requests</h3>
        <p>Manage requests from other students.</p>

        <Link to="/ride-requests">
          <button>Ride Requests</button>
        </Link>
      </div>

      <div className="card">
        <h3>👤 Profile</h3>
        <p>View and update your profile.</p>

        <Link to="/profile">
          <button>My Profile</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;

