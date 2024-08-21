import React from 'react';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/home'
import ContactUs from './Components/contactUs';
// import './App.css'

function App() {
  return (
    <>
     <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactUs" element={<ContactUs/>}/>
      
    </Routes>
  </Router>
    </>
  );
}

export default App;
