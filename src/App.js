import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DoctorProfile from "./pages/DoctorProfile";
import Appointment from "./components/AppointmentForm";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/:name" element={<DoctorProfile />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </Router>
  );
};

export default App;
