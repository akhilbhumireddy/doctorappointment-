import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/AppointmentForm.css";

const Appointment = () => {
  const { state } = useLocation();
  const { doctor } = state || { doctor: { name: "Doctor" } };
  const navigate = useNavigate();

  const [appointmentData, setAppointmentData] = useState({
    date: "",
    time: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData({ ...appointmentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Appointment confirmed with ${doctor.name} on ${appointmentData.date} at ${appointmentData.time}`
    );
    navigate("/");
  };

  return (
    <div className="appointment-page">
      <Header />
      <h2>Book Appointment with {doctor.name}</h2>
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={appointmentData.date}
          onChange={handleInputChange}
          required
        />

        <label>Time:</label>
        <input
          type="time"
          name="time"
          value={appointmentData.time}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Confirm Appointment</button>
      </form>
      <Footer />
    </div>
  );
};

export default Appointment;
