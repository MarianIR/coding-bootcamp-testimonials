import { useState } from "react";
import React from "react";
import testimonialData from "./data";
import prevArrow from "/src/images/icon-prev.svg";
import nextArrow from "/src/images/icon-next.svg";
const App = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentReviewIndex(
      (currentReviewIndex - 1 + testimonialData.length) % testimonialData.length
    );
  };

  const handleNextClick = () => {
    setCurrentReviewIndex((currentReviewIndex + 1) % testimonialData.length);
  };

  const currentReview = testimonialData[currentReviewIndex];

  return (
    <section className="hero">
      <div className="informations-container">
        <p className="review-paragraph">"{currentReview.review}"</p>
        <div className="reviewer-info">
          <strong className="reviewer-name">{currentReview.name}</strong>
          <h5 className="reviewer-profession">{currentReview.profession}</h5>
        </div>
      </div>
      <div className="portret-container">
        <img
          src={currentReview.portret}
          alt="This is reviewer's portret"
          className="reviewer-portret"
        />
        <div className="arrow-container">
          <img
            src={prevArrow}
            alt="This will show you the previous review when you click it!"
            className="prev-arrow"
            onClick={handlePrevClick}
          />
          <img
            src={nextArrow}
            alt="This will show you the next review when you click it!"
            className="next-arrow"
            onClick={handleNextClick}
          />
        </div>
      </div>
    </section>
  );
};

export default App;
