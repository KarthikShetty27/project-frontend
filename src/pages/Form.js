// Form.js
import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [age, setAge] = useState('');
  const [seb, setSeb] = useState('');
  const [sscMarks, setSscMarks] = useState('');
  const [hscMarks, setHscMarks] = useState('');
  const [mhtcetMarks, setMhtcetMarks] = useState('');
  const [jeeMainsMarks, setJeeMainsMarks] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
        age: age,
        socioeconomicBackground: seb,
        sscMarks: sscMarks,
        hscMarks: hscMarks,
        mhtcetMarks: mhtcetMarks,
        jeeMainsMarks: jeeMainsMarks,
      };
  
      try {
        const response = await axios.post('http://127.0.0.1:5000/form-data', formData);
        
        console.log('Form submitted successfully!');
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error during form submission:', error);
      }
    };
  };

   return (
    <div id="finput">
      <h2> Form Details </h2>
      <div className='form-data'>
        <form onSubmit={handleSubmit}>
        {/* Age */}
          <div className="form-group row">
            <label for="Age"  className="col-sm-4 col-form-label">Age: </label>
            <div className="col-sm-8">
              <input className="form-control" id="Age" type="text" placeholder="19-26" value={age} onChange={(event) => setAge(event.target.value)} required />
            </div>
          </div>
          <br />
        {/* Socioeconomic Background */}
          <div  className="form-group row">
            <label for="SEB"  className="col-sm-5 col-form-label">Socioeconomic Background: </label>
            <div  className="col-sm-7">
              <select id="inputState"  className="form-control" value={seb} onChange={(event) => setSeb(event.target.value)} required >
              <option value="">--Please select an option--</option>
              <option value="Open">Open</option>
              <option value="SQ - State Quota">SQ - State Quota</option>
              <option value="SC - Scheduled Castes">SC - Scheduled Castes</option>
              <option value="ST - Scheduled Tribes">ST - Scheduled Tribes</option>
              <option value="EWS - Economically Weaker Sections"> EWS - Economically Weaker Sections </option>
              <option value="OBC - Other Backward Classes"> OBC - Other Backward Classes </option>
              </select>
            </div>
          </div>
          <br />
        {/* SSC Marks */}
          <div  className="form-group row">
            <label for="SSC"  className="col-sm-4 col-form-label">SSC Marks: </label>
            <div  className="col-sm-8">
              <input type="ssc-marks" step="0.01" className="form-control" id="SSC" placeholder="85.56" value={sscMarks} onChange={(event) => setSscMarks(event.target.value)} required />
            </div>
          </div>
          <br />
        {/* HSC Marks */}
          <div  className="form-group row">
            <label for="HSC"  className="col-sm-4 col-form-label">HSC Marks: </label>
            <div  className="col-sm-8">
                <input type="hsc-marks" step="0.01" className="form-control" id="HSC" placeholder="88.64"  value={hscMarks} onChange={(event) => setHscMarks(event.target.value)} required />
            </div>
          </div>
          <br />
         {/* MHTCET Marks */}
         <div  className="form-group row">
            <label for="MHTCET"  className="col-sm-4 col-form-label">MHTCET Marks: </label>
            <div  className="col-sm-8">
                <input type="mhtcet-marks" step="0.01" className="form-control" id="MHTCET" placeholder="90.85" value={mhtcetMarks} onChange={(event) => setMhtcetMarks(event.target.value)} required />
            </div>
         </div>
         <br />
         {/* JEE Mains Marks */}
         <div  className="form-group row">
            <label for="JEE"  className="col-sm-4 col-form-label">JEE Mains Marks: </label>
            <div  className="col-sm-8">
                <input type="jee-mains-marks" step="0.01" className="form-control" id="JEE" placeholder="93.26"  value={jeeMainsMarks} onChange={(event) => setJeeMainsMarks(event.target.value)} />
            </div>
         </div>
         <br />
          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );

export default Form;