import React from "react";
import "../styles/DoctorCard.css";

const DoctorCard = ({ name, specialty, clinic, onCall, onClick }) => {
  return (
    <div className="doctor-card" onClick={onClick}>
      <h3>{name}</h3>
      <p>{specialty}</p>
      <p>{clinic}</p>
      <button onClick={onCall}>Call Doctor</button>
    </div>
  );
};

export default DoctorCard;
