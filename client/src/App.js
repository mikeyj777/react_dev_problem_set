import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Welcome from './components/002';
import P006 from './components/006';
import P007 from './components/007';
import './App.css';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ans" element={<P007 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;