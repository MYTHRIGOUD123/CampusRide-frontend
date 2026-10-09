
import { Link, useLocation, useNavigate } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  const student = location.state?.student;

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <div className="page">
      <div className="header">
        <div className="logo">🚗 CampusRide</div>

        <div className="nav">
          <Link to="/profile" state={{ student }}>
            Profile
          </Link>

          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <h2>
        Welcome{student?.name ? `, ${student.name}` : ""} to CampusRide!
      </h2>

      {student?.email && <p>{student.email}</p>}

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
       <Link to="/offer-ride" state={{ student }}>
  <button>Offer a Ride</button>
</Link>
      </div>

      <div className="card">
        <h3>🚗 My Rides</h3>
        <p>View your offered and joined rides.</p>
        <Link to="/my-rides" state={{ student }}>
  <button>My Rides</button>
</Link>
      </div>

      <div className="card">
        <h3>📩 Ride Requests</h3>
        <p>Manage requests from other students.</p>
        <Link to="/ride-requests" state={{ student }}>
  <button>Ride Requests</button>
</Link>
      </div>

      <div className="card">
        <h3>👤 Profile</h3>
        <p>View and update your profile.</p>
        <Link to="/profile" state={{ student }}>
          <button>My Profile</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;

