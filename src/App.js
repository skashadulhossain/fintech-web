import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Pages/About/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="Contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;