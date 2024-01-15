// HomePage.js
import React from 'react';
import './assets/css/styles.css'; // Import the CSS from styles.css file
import Home from './Home';// Import the Home section of the page
import { FormInput, submissionsJSON} from './FormInput';// Import the FormInput section of the page
import FormOutput from './FormOutput';// Import the FormOutput section of the page

const HomePage = () => {

  console.log(submissionsJSON);

  return (
    <div id="home-page">
      <Home />
      <div className='Form-IO'>
        <FormInput />
        <FormOutput />
      </div>
    </div>

  );
};

export default HomePage;