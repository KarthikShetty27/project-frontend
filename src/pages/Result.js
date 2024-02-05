// Result.js
import React from 'react';
import './assets/css/styles.css'; // Import the CSS from styles.css file

const Result = ({ result }) => {
  if (!result) {
    return <div> null </div>; // Render nothing if the result is not available yet
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