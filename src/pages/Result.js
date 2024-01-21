// Result.js

import './assets/css/styles.css'; // Import the CSS from styles.css file

const Result = ({ resultMessage }) => {
  return (
    <div id="foutput">
      <h2>Form Pred-Result</h2>
      <p>{resultMessage}</p>
    </div>
  );
};

export default Result;