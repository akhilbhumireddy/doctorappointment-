import React from "react";
import { Phone, Calendar, Star } from "lucide-react";
import "../styles/DoctorCard.css";

const DoctorCard = ({
  name,
  specialization,
  image,
  rating,
  onCall,
  onClick,
}) => {
  return (
    <div className="doctor-card" onClick={onClick}>
      <img src={image} alt={name} className="doctor-image" />
      <div className="doctor-info">
        <h3>{name}</h3>
        <p>{specialization}</p>
        <div className="doctor-rating">
          <Star size={16} fill="#FFD700" stroke="#FFD700" />
          <span>{rating}</span>
        </div>
      </div>
      <div className="doctor-actions">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onCall();
          }}
          className="call-button"
        >
          <Phone size={16} />
          Call
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="book-button"
        >
          <Calendar size={16} />
          Book
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
