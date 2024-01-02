// FormResult.js
import React from 'react';
import './assets/css/styles.css'; // Import the CSS from styles.css file
import { formData } from './FormInput';

// FormResults component
const FormResults = ({ formData }) => {
  return (
    <div>
      <h2>Form Results</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

const FormResult = () => {
  return (
    <div id="foutput">
      <h2>Form Result</h2>
      <FormResults />
    </div>
  );
};

export default FormResult;