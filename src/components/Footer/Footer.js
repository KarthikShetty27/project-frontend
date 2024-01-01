import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import './assets/css/Footer.css'; // Import the CSS from styles.css file


const Footer = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });


  return (
    <div className="Bottom-Container ">
        <div className="footer">
            <b> RBL Group C1 </b>
            <br />
            <p className='MonthandYear'> &copy; {currentMonth} {currentYear} </p>
        </div>
    </div>
  );
};


export default Footer;
