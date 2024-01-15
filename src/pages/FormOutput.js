// FormOutput.js
import React from 'react';
import './assets/css/styles.css'; // Import the CSS from styles.css file

import { FormInput, submissionsJSON} from './FormInput';// Import the FormInput section of the page

const FormOutput = () => {

  console.log(FormInput);

    return (
      <div id="foutput">
          <h2>Form Pred-Result</h2>
          {submissionsJSON}
      </div>
    );
  };
  
  export default FormOutput;