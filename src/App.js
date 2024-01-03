// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './pages/assets/css/styles.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage';
import FormInput from './pages/FormInput';
import FormOutput from './pages/FormOutput';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/form-input" element={<FormInput />} />
              <Route path="/form-result" element={<FormOutput />} />
            </Routes>
          </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
