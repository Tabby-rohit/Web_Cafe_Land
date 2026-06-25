import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { Routes,Route } from 'react-router-dom';
import About from './pages/About.js';
import Navbar from './pages/Navbar.js';
function App() {
  return (
    <div className="App">
      <div><Navbar/></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
export default App;