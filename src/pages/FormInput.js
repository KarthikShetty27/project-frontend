// FormInput.js
import React, { useState } from 'react';
import './assets/css/styles.css';

// Constants and utility functions
const AGE_CONSTRAINT = { min: 19, max: 26 };
const isValidTwoDigitNumberWithTwoDecimalPlaces = (value) => /^(?!0\d)\d{2}(\.\d{1,2})?$/.test(value);

// FormInputField component
const FormInputField = ({ label, id, type, placeholder, helpText, options, value, onChange, error }) => {
  const isError = error !== undefined && error !== null;

  return (
    <div className={`form-group row ${isError ? 'has-error' : ''}`}>
      <label htmlFor={id} className="col-sm-5 col-form-label">{label}:</label>
      <div className="col-sm-7">
        {type === 'select' ? (
          <select id={id} className="form-control" value={value} onChange={onChange}>
            <option disabled>Select One Option</option>
            {options.map((option, index) => (
              <option key={index} className="form-control-option">{option}</option>
            ))}
          </select>
        ) : (
          <>
            <input type={type} className="form-control" id={id} placeholder={placeholder} value={value} onChange={onChange} />
            <small className={`form-text text-muted ${isError ? 'error-help-text' : ''}`}>
              {isError ? (
                <span className="error-help-text">{helpText}</span>
              ) : (
                <span className="text-muted">{helpText}</span>
              )}
            </small>
          </>
        )}
      </div>
    </div>
  );
};


// FormResults component
const FormResults = ({ formData }) => {
  return (
    <div>
      <h2>Form Results</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

// FormInput component
const FormInput = () => {
  // State variables
  const [age, setAge] = useState('');
  const [inputSocioecoBackground, setinputSocioecoBackground] = useState('Select One Option');
  const [sscMarks, setSSCMarks] = useState('');
  const [hscMarks, setHSCMarks] = useState('');
  const [mhtcetScores, setMHTCETScores] = useState('');
  const [jeeMainsScores, setJeeMainsScores] = useState('');
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(null); // State to store form data


  // Form validation function
  const validateFields = ({ age, inputSocioecoBackground, sscMarks, hscMarks, mhtcetScores, jeeMainsScores }) => {
    const errors = {};

    if (isNaN(age) || age < AGE_CONSTRAINT.min || age > AGE_CONSTRAINT.max) {
      errors.age = 'Age must be between 19 and 26.';
    }

    if (inputSocioecoBackground === 'Select One Option') {
      errors.inputSocioecoBackground = 'Please select a valid Socioeconomic Background.';
    }

    const validatePercentageMarks = (marks, field) => {
      if (!isValidTwoDigitNumberWithTwoDecimalPlaces(marks)) {
        errors[field] = `Enter valid ${field} (up to 2 decimal places).`;
      }
    };

    validatePercentageMarks(sscMarks, 'sscMarks');
    validatePercentageMarks(hscMarks, 'hscMarks');
    validatePercentageMarks(mhtcetScores, 'mhtcetScores');
    validatePercentageMarks(jeeMainsScores, 'jeeMainsScores');

    return errors;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFields({ age, inputSocioecoBackground, sscMarks, hscMarks, mhtcetScores, jeeMainsScores });

    if (Object.keys(validationErrors).length === 0) {
      const data = { age, inputSocioecoBackground, sscMarks, hscMarks, mhtcetScores, jeeMainsScores };
      setFormData(data); // Store form data in state
      console.log('Form submitted:', data);
    } else {
      setErrors(validationErrors);
      console.log('Form has errors. Please fix them before submitting.');
    }
  };

  return (
    <div id="finput">
      <h2 class="form_name">Prediction Form Input</h2>
      <br />
      <div>
        <form onSubmit={handleSubmit}>
        <FormInputField
            label="Age"
            id="inputAge"
            type="text"
            placeholder="Enter Age value"
            helpText="Age must be between 19-26."
            value={age}
            onChange={(e) => setAge(e.target.value)}
            error={errors.age}
          /> <br />
          <FormInputField
            label="Socioeconomic Background"
            id="inputSocioecoBackground"
            type="select"
            options={['Open', 'State Quota', 'SC - Scheduled Castes', 'ST - Scheduled Tribes', 'EWS - Economically Weaker Sections', 'OBC - Other Backward Classes']}
            value={inputSocioecoBackground}
            onChange={(e) => setinputSocioecoBackground(e.target.value)}
            error={errors.inputSocioecoBackground}
          /> <br />
          <FormInputField
            label="SSC Percentage"
            id="inputSSC"
            type="text"
            placeholder="Enter SSC Percentage"
            helpText="Enter marks value up to 2 decimal places (e.g., 90.25)."
            value={sscMarks}
            onChange={(e) => setSSCMarks(e.target.value)}
            error={errors.sscMarks}
          /> <br />
          <FormInputField
            label="HSC Percentage"
            id="inputHSC"
            type="text"
            placeholder="Enter HSC Percentage"
            helpText="Enter marks value up to 2 decimal places (e.g., 90.25)."
            value={hscMarks}
            onChange={(e) => setHSCMarks(e.target.value)}
            error={errors.hscMarks}
          /> <br />
          <FormInputField
            label="MHTCET Scores Percentile"
            id="inputMHTCET"
            type="text"
            placeholder="Enter MHTCET Scores Percentile"
            helpText="Enter marks value up to 2 decimal places (e.g., 90.25)."
            value={mhtcetScores}
            onChange={(e) => setMHTCETScores(e.target.value)}
            error={errors.mhtcetScores}
          /> <br />
          <FormInputField
            label="JEE Mains Scores Percentile"
            id="inputJEE"
            type="text"
            placeholder="Enter JEE Mains Scores Percentile"
            helpText="Enter marks value up to 2 decimal places (e.g., 90.25)."
            value={jeeMainsScores}
            onChange={(e) => setJeeMainsScores(e.target.value)}
            error={errors.jeeMainsScores}
          /> <br />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <FormResults formData={formData} />
    </div>
  );
};

export default FormInput;
export { formData };