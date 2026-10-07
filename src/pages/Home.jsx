
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <nav className="navbar">
        <div className="logo">CampusRide 🚗</div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Ride Together. Save Together.</h1>

          <p>
            CampusRide connects college students traveling in the same
            direction, making daily travel easier, safer, and more affordable.
          </p>

          <div className="hero-buttons">
            <Link to="/find-ride" className="primary-btn">
              Find a Ride
            </Link>

            <Link to="/offer-ride" className="secondary-btn">
              Offer a Ride
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why CampusRide?</h2>

        <div className="feature-container">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Find a Ride</h3>
            <p>
              Find students traveling to the same destination as you.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚘</div>
            <h3>Offer a Ride</h3>
            <p>
              Share your available seats and travel with fellow students.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Travel Together</h3>
            <p>
              Connect with students and make your daily commute easier.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 CampusRide. Built for students, by students.</p>
      </footer>
    </div>
  );
}

export default Home;

