import React, { useState } from 'react';
import './Swipper.css';
import img1 from '../assets/Boat Logo.png';
import img2 from '../assets/JandJ.png'

const Swipper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    img1, 
    img2,
    img2,
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ];

  const itemsToShow = 5;
  const totalSlides = cards.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - itemsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - itemsToShow : prevIndex - 1
    );
  };
  

  return (
    <div className="slider-container">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(-${(currentIndex / itemsToShow) * 100}%)` }}
          
        >
          {cards.map((imageUrl, index) => (
            <div className="slide" key={index}>
              <img src={imageUrl} alt={`Slide ${index + 1}`} className="card-image" />
            </div>
          ))}
        </div>
      </div>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Swipper;
