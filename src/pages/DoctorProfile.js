import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReviewSection from "../components/ReviewSection";
import "../styles/DoctorProfile.css";
import { Phone, Calendar, MapPin, Clock, Award } from "lucide-react";

const DoctorProfile = () => {
  const { state } = useLocation();
  const { doctor } = state || {
    doctor: { name: "Doctor", specialization: "", clinic: "" },
  };
  const navigate = useNavigate();

  const handleAppointment = () => {
    navigate("/appointment", { state: { doctor } });
  };

  return (
    <div className="doctor-profile-page">
      <Header />
      <main className="main-content">
        <div className="doctor-profile">
          <img src={doctor.image} alt={doctor.name} className="doctor-image" />
          <div className="doctor-info">
            <h1>{doctor.name}</h1>
            <p className="doctor-specialization">
              <Award size={16} />
              {doctor.specialization}
            </p>
            <p className="doctor-clinic">
              <MapPin size={16} />
              {doctor.clinic}
            </p>
            <div className="doctor-actions">
              <button
                onClick={() => alert("Calling Doctor...")}
                className="call-button"
              >
                <Phone size={16} />
                Call Doctor
              </button>
              <button onClick={handleAppointment} className="book-button">
                <Calendar size={16} />
                Book Appointment
              </button>
            </div>
          </div>
        </div>
        <section className="doctor-details">
          <h2>About Dr. {doctor.name}</h2>
          <p>
            Dr. {doctor.name} is a highly skilled {doctor.specialization} with
            years of experience in the field. They are dedicated to providing
            the best care for their patients.
          </p>
          <div className="doctor-availability">
            <h3>
              <Clock size={16} />
              Available Hours
            </h3>
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p>Saturday: 10:00 AM - 2:00 PM</p>
          </div>
        </section>
        <ReviewSection selectedDoctor={doctor} />
      </main>
      <Footer />
    </div>
  );
};

export default DoctorProfile;
