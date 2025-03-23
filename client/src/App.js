import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Welcome from './components/002';
import P006 from './components/006';
import P007 from './components/007';
import P008 from './components/008';
import P009 from './components/009';
import P010 from './components/010';
import './App.css';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ans" element={<P010 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;