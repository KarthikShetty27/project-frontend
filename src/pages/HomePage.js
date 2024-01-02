// HomePage.js
import React from 'react';
import './assets/css/styles.css'; // Import the CSS from styles.css file
import Home from './Home';// Import the Home section of the page
import FormInput from './FormInput';// Import the FormInput section of the page
import FormResult from './FormResult';// Import the FormOutput section of the page

const HomePage = () => {
  return (
    <div id="home-page">
      <Home />
      <div className='Form-IO'>
        <FormInput />
        <FormResult />
      </div>
    </div>

  );
};

export default HomePage;