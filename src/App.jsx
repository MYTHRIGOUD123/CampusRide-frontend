


import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import FindRide from "./pages/FindRide";
import OfferRide from "./pages/OfferRide";
import MyRides from "./pages/MyRides";
import RideRequests from "./pages/RideRequests";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/find-ride" element={<FindRide />} />
        <Route path="/offer-ride" element={<OfferRide />} />
        <Route path="/my-rides" element={<MyRides />} />
        <Route path="/ride-requests" element={<RideRequests />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;








