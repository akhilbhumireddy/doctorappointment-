import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/DoctorProfile.css";

const DoctorProfile = () => {
  const { state } = useLocation();
  const { doctor } = state || {
    doctor: { name: "Doctor", specialty: "", clinic: "" },
  };
  const navigate = useNavigate();

  const handleAppointment = () => {
    navigate("/appointment", { state: { doctor } });
  };

  return (
    <div className="doctor-profile-page">
      <Header />
      <div className="doctor-profile">
        <h1>{doctor.name}</h1>
        <p>Specialty: {doctor.specialization}</p>
        <p>Clinic: {doctor.clinic}</p>
        <button onClick={() => alert("Calling Doctor...")}>Call Doctor</button>
        <button onClick={handleAppointment}>Book Appointment</button>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorProfile;
