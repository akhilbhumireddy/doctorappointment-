import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/AppointmentForm.css";
import { Calendar, Clock, User, Phone, MessageSquare } from "lucide-react";

const AppointmentForm = () => {
  const { state } = useLocation();
  const { doctor } = state || { doctor: { name: "Doctor" } };
  const navigate = useNavigate();

  const [appointmentData, setAppointmentData] = useState({
    date: "",
    time: "",
    name: "",
    phone: "",
    reason: "",
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
      <main className="main-content">
        <form onSubmit={handleSubmit} className="appointment-form">
          <h2>Book Appointment with Dr. {doctor.name}</h2>
          <div className="form-group">
            <label htmlFor="date">
              <Calendar size={16} /> Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={appointmentData.date}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">
              <Clock size={16} /> Time:
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={appointmentData.time}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">
              <User size={16} /> Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={appointmentData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              <Phone size={16} /> Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={appointmentData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="reason">
              <MessageSquare size={16} /> Reason for Visit:
            </label>
            <textarea
              id="reason"
              name="reason"
              value={appointmentData.reason}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Confirm Appointment
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default AppointmentForm;
