import React, { useState } from 'react';
import './Latest.css';
import img1 from '../assets/img131.jpg';
import img2 from '../assets/JandJ.png'

const Latest = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    img1, 
    img2,
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    
  ];

  return (
    <div className="Latest-container">
      
      <div className="Latest">
        
          {cards.map((imageUrl, index) => (
            <div className="Latest-card" key={index}>
              <img src={imageUrl} alt={`Slide ${index + 1}`} className="image" />
            </div>
          ))}
        
      </div>
      
    </div>
  );
};

export default Latest;
