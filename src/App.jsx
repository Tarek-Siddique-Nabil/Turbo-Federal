import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/About/AboutUs";
import Footer from "./Components/Footer/Footer";
import AboutTeam from "./Components/Team/AboutTeam";

import Solutions from "./Components/Solutions/Solutions";
import Services from "./Components/Services/TabNavigation/Services";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/team" element={<AboutTeam />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Solutions />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
