import React, { useState, useEffect } from "react";
import "../styles/ReviewSection.css";

const reviews = [
  {
    id: 1,
    reviewer: "Alicent Hightower",
    rating: 5,
    comment: "Great experience with the doctor!",
    date: "20 Jan 2023",
  },
  {
    id: 2,
    reviewer: "John Snow",
    rating: 3,
    comment: "Very knowledgeable and friendly.",
    date: "15 Feb 2023",
  },
  {
    id: 3,
    reviewer: "Arya Stark",
    rating: 4,
    comment: "Doctor was very helpful and patient.",
    date: "12 Mar 2023",
  },
  {
    id: 4,
    reviewer: "Robb Stark",
    rating: 5,
    comment: "Quick diagnosis and treatment plan.",
    date: "10 Apr 2023",
  },
  {
    id: 5,
    reviewer: "Sansa Stark",
    rating: 4,
    comment: "Professional and kind approach.",
    date: "22 Apr 2023",
  },
  {
    id: 6,
    reviewer: "Tyrion Lannister",
    rating: 5,
    comment: "Answered all my concerns thoroughly.",
    date: "1 May 2023",
  },
  {
    id: 7,
    reviewer: "Jaime Lannister",
    rating: 2,
    comment: "Felt very comfortable with the treatment.",
    date: "11 May 2023",
  },
  {
    id: 8,
    reviewer: "Cersei Lannister",
    rating: 2,
    comment: "Wonderful doctor and staff.",
    date: "18 Jun 2023",
  },
  {
    id: 9,
    reviewer: "Daenerys Targaryen",
    rating: 4,
    comment: "Highly recommended for care and expertise.",
    date: "25 Jun 2023",
  },
  {
    id: 10,
    reviewer: "Jon Snow",
    rating: 5,
    comment: "Clear and concise instructions for recovery.",
    date: "5 Jul 2023",
  },
  {
    id: 11,
    reviewer: "Ramsay Bolton",
    rating: 3,
    comment: "Impressed with the fast diagnosis.",
    date: "15 Jul 2023",
  },
  {
    id: 12,
    reviewer: "Ygritte",
    rating: 2,
    comment: "Would definitely come again for a follow-up.",
    date: "22 Aug 2023",
  },
  {
    id: 13,
    reviewer: "Theon Greyjoy",
    rating: 5,
    comment: "My health is improving after the visit.",
    date: "1 Sep 2023",
  },
  {
    id: 14,
    reviewer: "Samwell Tarly",
    rating: 4,
    comment: "Doctor was great in handling my case.",
    date: "7 Sep 2023",
  },
  {
    id: 15,
    reviewer: "Bran Stark",
    rating: 5,
    comment: "The service was exceptional.",
    date: "14 Sep 2023",
  },
  {
    id: 16,
    reviewer: "Margaery Tyrell",
    rating: 2,
    comment: "The doctor explained everything thoroughly.",
    date: "22 Sep 2023",
  },
  {
    id: 17,
    reviewer: "Olenna Tyrell",
    rating: 5,
    comment: "Wonderful doctor, very attentive.",
    date: "1 Oct 2023",
  },
  {
    id: 18,
    reviewer: "Brienne of Tarth",
    rating: 5,
    comment: "Felt cared for and understood.",
    date: "10 Oct 2023",
  },
  {
    id: 19,
    reviewer: "Tormund Giantsbane",
    rating: 5,
    comment: "Doctor’s treatment worked perfectly.",
    date: "15 Oct 2023",
  },
  {
    id: 20,
    reviewer: "Varys",
    rating: 4,
    comment: "A great experience, felt safe and heard.",
    date: "18 Oct 2023",
  },
];

const ReviewSection = ({ selectedDoctor }) => {
  const [filteredReviews, setFilteredReviews] = useState([]);

  // Filter reviews based on the selected doctor
  useEffect(() => {
    if (selectedDoctor) {
      const doctorReviews = reviews.filter(
        (review) => review.doctor === selectedDoctor.name
      );
      setFilteredReviews(doctorReviews);
    }
  }, [selectedDoctor]);

  const renderStars = (rating) => {
    return [...Array(5)].map((star, index) => (
      <span key={index} className="star">
        {index < rating ? "★" : "☆"}
      </span>
    ));
  };

  return (
    <div className="review-section">
      <h2>Reviews for {selectedDoctor ? selectedDoctor.name : "Doctor"}</h2>
      <div className="review-list">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review, index) => (
            <div className="review" key={index}>
              <div className="review-stars">{renderStars(review.rating)}</div>
              <p>
                <strong>{review.reviewer}:</strong> {review.comment}
              </p>
            </div>
          ))
        ) : (
          <p>No reviews available for this doctor yet.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
