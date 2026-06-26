import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { Routes,Route } from 'react-router-dom';
import About from './pages/About.js';
import Navbar from './pages/Navbar.js';
import Contact from './pages/Contact.js';
import FinishSignIn from './pages/FinishSignIn.js';
import SignIn from "./pages/SignIn.js";
import Register from "./pages/Register.js";
function App() {
  return (
    <div className="App">
      <div><Navbar/></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/finish-sign-in" element={<FinishSignIn />}></Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
export default App;