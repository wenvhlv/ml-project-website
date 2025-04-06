// src/pages/Placement.jsx
import React, { useState } from 'react';
import './Placement.css';

export default function Placement() {
  const [cgpa, setCgpa] = useState('');
  const [iq, setIq] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePrediction = async () => {
    setLoading(true);
    setResult(null);

    // Send POST request to Flask API with CGPA and IQ
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cgpa: cgpa,
          iq: iq,
        }),
      });
      const data = await response.json();
      setResult(data.prediction);
    } catch (error) {
      console.error('Error fetching prediction:', error);
      setResult('Error: Unable to fetch prediction');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="placement-container">
      <h2 className="title">Placement Predictor</h2>
      <p className="description">Enter your CGPA and IQ to predict whether you will be placed or not?</p>

      <div className="input-form">
        <input
          type="number"
          placeholder="Enter CGPA(0-10)"
          className="input-field"
          value={cgpa}
          onChange={(e) => setCgpa(e.target.value)}
          min="0" max="10"
        />
        <input
          type="number"
          placeholder="Enter IQ(0-200)"
          className="input-field"
          value={iq}
          onChange={(e) => setIq(e.target.value)}
          min="0" max="200"
        />

        <button 
          className={`predict-btn ${loading ? 'loading' : ''}`}
          onClick={handlePrediction}
          disabled={loading}
        >
          {loading ? 'Predicting...' : 'Predict'}
        </button>
      </div>

      {result && (
        <div className={`result ${result === 'Placed' ? 'success' : 'failure'}`}>
          {result === 'Placed' ? '🎉 You will be placed!' : '❌ You will not be placed.'}
        </div>
      )}
    </div>
  );
}
