// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

import Placement from './pages/Placement';
import HumanDetection from './pages/HumanDetection';
import Home from './pages/Home'; // Adjust path as per your project structure

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/placement" element={<Placement />} />
            <Route path="/human-detection" element={<HumanDetection />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
