import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import FormInput from './pages/FormInput';
import FormResult from './pages/FormResult';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/form-input" element={<FormInput />} />
            <Route path="/form-result" element={<FormResult />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;