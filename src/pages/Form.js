// Form.js
import React, { useState } from 'react';

function Form() {
  const [age, setAge] = useState('');
  const [seb, setSeb] = useState('');
  const [sscMarks, setSscMarks] = useState('');
  const [hscMarks, setHscMarks] = useState('');
  const [mhtcetMarks, setMhtcetMarks] = useState('');
  const [jeeMainsMarks, setJeeMainsMarks] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
    console.log(`Age: ${age}`);
    console.log(`Socioeconomic Background: ${seb}`);
    console.log(`SSC Marks: ${sscMarks}`);
    console.log(`HSC Marks: ${hscMarks}`);
    console.log(`MHTCET Marks: ${mhtcetMarks}`);
    console.log(`JEE Mains Marks: ${jeeMainsMarks}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Age:
        <input
          type="text"
          value={age}
          onChange={(event) => setAge(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Socioeconomic Background:
        <select
          value={seb}
          onChange={(event) => setSeb(event.target.value)}
          required
        >
          <option value="">--Please select an option--</option>
          <option value="Open">Open</option>
          <option value="SQ - State Quota">SQ - State Quota</option>
          <option value="SC - Scheduled Castes">SC - Scheduled Castes</option>
          <option value="ST - Scheduled Tribes">ST - Scheduled Tribes</option>
          <option value="EWS - Economically Weaker Sections">
            EWS - Economically Weaker Sections
          </option>
          <option value="OBC - Other Backward Classes">
            OBC - Other Backward Classes
          </option>
        </select>
      </label>
      <br />
      <label>
        SSC Marks:
        <input
          type="number"
          step="0.01"
          value={sscMarks}
          onChange={(event) => setSscMarks(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        HSC Marks:
        <input
          type="number"
          step="0.01"
          value={hscMarks}
          onChange={(event) => setHscMarks(event.target.value)}
        />
      </label>
      <br />
      <label>
        MHTCET Marks:
        <input
          type="number"
          step="0.01"
          value={mhtcetMarks}
          onChange={(event) => setMhtcetMarks(event.target.value)}
        />
      </label>
      <br />
      <label>
        JEE Mains Marks:
        <input
          type="number"
          step="0.01"
          value={jeeMainsMarks}
          onChange={(event) => setJeeMainsMarks(event.target.value)}
        />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;