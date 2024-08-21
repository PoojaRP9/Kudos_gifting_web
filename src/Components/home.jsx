import React from 'react';

import Navbar from './navbar'
import Carousel from './carousel';
import Swipper from './swipper';
import Latest from './Latest';
import '../App.css'

function Home() {
  return (
    <>
    <div style={{ backgroundColor: '', minHeight: '100vh' }}>
      <Navbar />
      <div className="carousel-wrapper">
        <Carousel />
      </div>
      <h2 style={{ textAlign: 'center' }}>Our Brands</h2>
      <Swipper />
      <h2 style={{ textAlign: 'center' }}>Our Latest Collection</h2>
      <Latest/>
      </div>
    </>
  );
}

export default Home;
