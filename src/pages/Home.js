import React, { useState } from "react";
import Header from "../components/Header";
import DoctorCard from "../components/DoctorCard";
import ReviewSection from "../components/ReviewSection";
import Footer from "../components/Footer";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

const doctors = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    specialization: "Gynecologist",
    image: "https://ui-avatars.com/api/?name=Ananya+Sharma&background=random",
  },
  {
    id: 2,
    name: "Dr. Rohan Malhotra",
    specialization: "Infertility Specialist",
    image: "https://ui-avatars.com/api/?name=Rohan+Malhotra&background=random",
  },
  {
    id: 3,
    name: "Dr. Meera Gupta",
    specialization: "Dermatologist",
    image: "https://ui-avatars.com/api/?name=Meera+Gupta&background=random",
  },
  {
    id: 4,
    name: "Dr. Sanjay Patel",
    specialization: "Cardiologist",
    image: "https://ui-avatars.com/api/?name=Sanjay+Patel&background=random",
  },
  {
    id: 5,
    name: "Dr. Kavita Desai",
    specialization: "Orthopedic Surgeon",
    image: "https://ui-avatars.com/api/?name=Kavita+Desai&background=random",
  },
  {
    id: 6,
    name: "Dr. Nikhil Verma",
    specialization: "Neurologist",
    image: "https://ui-avatars.com/api/?name=Nikhil+Verma&background=random",
  },
  {
    id: 7,
    name: "Dr. Akanksha Iyer",
    specialization: "Pediatrician",
    image: "https://ui-avatars.com/api/?name=Akanksha+Iyer&background=random",
  },
  {
    id: 8,
    name: "Dr. Sunil Mehta",
    specialization: "ENT Specialist",
    image: "https://ui-avatars.com/api/?name=Sunil+Mehta&background=random",
  },
  {
    id: 9,
    name: "Dr. Arjun Singh",
    specialization: "Oncologist",
    image: "https://ui-avatars.com/api/?name=Arjun+Singh&background=random",
  },
  {
    id: 10,
    name: "Dr. Priya Kapoor",
    specialization: "Psychiatrist",
    image: "https://ui-avatars.com/api/?name=Priya+Kapoor&background=random",
  },
  {
    id: 11,
    name: "Dr. Sneha Bhatt",
    specialization: "Dentist",
    image: "https://ui-avatars.com/api/?name=Sneha+Bhatt&background=random",
  },
  {
    id: 12,
    name: "Dr. Vivek Ghosh",
    specialization: "General Surgeon",
    image: "https://ui-avatars.com/api/?name=Vivek+Ghosh&background=random",
  },
  {
    id: 13,
    name: "Dr. Rina Mukherjee",
    specialization: "Urologist",
    image: "https://ui-avatars.com/api/?name=Rina+Mukherjee&background=random",
  },
  {
    id: 14,
    name: "Dr. Varun Kapoor",
    specialization: "Endocrinologist",
    image: "https://ui-avatars.com/api/?name=Varun+Kapoor&background=random",
  },
  {
    id: 15,
    name: "Dr. Suman Desai",
    specialization: "Hematologist",
    image: "https://ui-avatars.com/api/?name=Suman+Desai&background=random",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const goToDoctorProfile = (doctor) => {
    setSelectedDoctor(doctor);
    navigate(`/doctor/${doctor.name}`, { state: { doctor } });
  };

  return (
    <div className="home-page">
      <Header />
      <div className="doctor-list">
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            {...doctor}
            onCall={() => alert("Calling Doctor...")}
            onClick={() => goToDoctorProfile(doctor)}
          />
        ))}
      </div>
      {/* Pass the selected doctor to the ReviewSection */}
      {selectedDoctor && <ReviewSection selectedDoctor={selectedDoctor} />}
      <Footer />
    </div>
  );
};

export default Home;
