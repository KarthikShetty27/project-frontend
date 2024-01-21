// Form.js
import React, { useState }  from 'react';
import './assets/css/styles.css';
import IsValid from './IsValid'; // For validation of the form details
import Result from './Result'; // For the result component

const Form = () => {
  const [formData, setFormData] = useState({
    age: '',
    seb: '',
    sscMarks: '',
    hscMarks: '',
    mhtcetMarks: '',
    jeeMarks: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState({
    submitted: false,
    resultMessage: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    const validationResult = IsValid(formData);

    // Update submission status and result message
    setSubmissionStatus({
      submitted: true,
      resultMessage: validationResult.message,
  });

    // If validation passed, send data to Flask backend
    if (validationResult.isValid) {
      // Code to send data to Flask backend goes here
      // You can use fetch or any other method to send data to the backend
      // Example: fetch('backend_url', { method: 'POST', body: JSON.stringify(formData) });
    }
  };

  return (
    <div id="finput">
      <h2>Form Details</h2>
      <div className='form-data'>
        <form onSubmit={handleSubmit}>
         {/* Age */}
         <div  className="form-group row">
            <label for="Age"  className="col-sm-4 col-form-label">Age: </label>
            <div  className="col-sm-8">
              <input type="age"  className="form-control" id="Age" placeholder="Between 19-26" required min="19" max="26" onChange={handleChange} value={formData.age} />
              <div className="invalid-feedback">Please enter a valid age between 19 and 26.</div>
            </div>
         </div><br />
         {/* SEB - Socioeconomic Background */}
         <div  className="form-group row">
            <label for="SEB"  className="col-sm-5 col-form-label">Socioeconomic Background: </label>
            <div  className="col-sm-7">
              <select id="inputState"  className="form-control" required onChange={handleChange} value={formData.age} >
                  <option value=""> Select Menu </option>
                  <option value="Open"> Open </option>
                  <option value="State Quota"> SQ - State Quota </option>
                  <option value="SC"> SC - Scheduled Castes </option>
                  <option value="ST"> ST - Scheduled Tribes </option>
                  <option value="EWS"> EWS - Economically Weaker Sections </option>
                  <option value="OBC"> OBC - Other Backward Classes  </option>
              </select>
              <div className="invalid-feedback">Please select a socioeconomic background.</div>
            </div>
         </div><br />
         {/* SSC Marks */}
         <div  className="form-group row">
            <label for="SSC"  className="col-sm-4 col-form-label">SSC Marks: </label>
            <div  className="col-sm-8">
              <input type="ssc-marks" step="0.01" className="form-control" id="SSC" placeholder="85.56" required  onChange={handleChange} value={formData.age} />
              <div className="invalid-feedback">Please enter a valid SSC marks with 2 decimal places.</div>
            </div>
         </div><br />
         {/* HSC Marks  */}
         <div  className="form-group row">
            <label for="HSC"  className="col-sm-4 col-form-label">HSC Marks: </label>
            <div  className="col-sm-8">
                <input type="hsc-marks" step="0.01" className="form-control" id="HSC" placeholder="88.64"  onChange={handleChange} value={formData.age} />
                <div className="invalid-feedback">Please enter a valid HSC marks with 2 decimal places.</div>
            </div>
         </div><br />
         {/* MHTCET Marks */}
         <div  className="form-group row">
            <label for="MHTCET"  className="col-sm-4 col-form-label">MHTCET Marks: </label>
            <div  className="col-sm-8">
                <input type="mhtcet-marks" step="0.01" className="form-control" id="MHTCET" placeholder="90.85"  onChange={handleChange} value={formData.age}  />
                <div className="invalid-feedback">Please enter a valid MHTCET marks with 2 decimal places.</div>
            </div>
         </div><br />
         {/* JEE Marks Marks */}
         <div  className="form-group row">
            <label for="JEE"  className="col-sm-4 col-form-label">JEE Mains Marks: </label>
            <div  className="col-sm-8">
                <input type="jee-mains-marks" step="0.01" className="form-control" id="JEE" placeholder="93.26"  onChange={handleChange} value={formData.age} />
                <div className="invalid-feedback">Please enter a valid JEE Mains marks with 2 decimal places.</div>
            </div>
         </div><br />
         <button type="submit"  className="btn btn-primary">Submit</button>
        </form>
        <div>
        <h3>Submissions:</h3>
        {submissionStatus.submitted && <Result resultMessage={submissionStatus.resultMessage} />}
      </div>
      </div>
    </div>
  );
};

export default Form;