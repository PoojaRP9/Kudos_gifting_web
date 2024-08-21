import React, { useState } from 'react';
import './carousel.css';
import img1 from '../assets/project1.jpg';
import img2 from '../assets/project2.jpeg';


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
   img1,
   img2
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="carousel-item" key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" onClick={prevSlide}>❮</button>
      <button className="carousel-control-next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Carousel;
