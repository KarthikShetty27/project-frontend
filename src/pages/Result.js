// Result.js
import React from 'react';
import './assets/css/styles.css'; // Import the CSS from styles.css file

const Result = ({ result }) => {
  console.log('Result:', result); // Log the result object to see its structure and whether it's null

  if (!result || !result.collegePredictions || !result.branchPredictions) {
    return (
      <div id="foutput">
        <h2>Form Prediction Result</h2>
        <p>Result is not available yet.</p>
      </div>
    );
  }

  return (
    <div id="foutput">
      <h2>Form Prediction Result</h2>
      <p>College Predictions: {result.collegePredictions}</p>
      <p>Branch Predictions: {result.branchPredictions}</p>
    </div>
  );
};

export default Result;