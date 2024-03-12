// Result.js
import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import './assets/css/styles.css'; // Import the CSS from styles.css file

const Result = () => {
  const { state } = useLocation(); // Get the state from the location
  const combinedPredictions = state?.combinedPredictions; // Extract combinedPredictions from state

  console.log('Result:', combinedPredictions); // Log the result object to see its structure and whether it's null

  if (!combinedPredictions) {
    return (
      <div id="foutput">
        <h2>Form Prediction Result</h2>
        <p>Result is not available yet.</p>
      </div>
    );
  }

// Extract branch and college predictions
const branchPredictions = combinedPredictions[0]; // Accessing the first element
const collegePredictions = combinedPredictions[1]; // Accessing the second element

console.log('Branch:', {branchPredictions});
console.log('College:', {collegePredictions});

  return (
    <div id="foutput">
      <h2>Form Prediction Result</h2>
      <p>College Predictions: {collegePredictions}</p>
      <p>Branch Predictions: {branchPredictions}</p>
    </div>
  );
};

export default Result;