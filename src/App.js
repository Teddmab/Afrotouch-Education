import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import FAQ from './components/FAQ';

function App() {
  return (
    <Router>
      <nav className="navbar">
        {/* Navigation links */}
        <Link to="/">Home</Link>
        <Link to="/faq">FAQ</Link>
      </nav>
      <Header /> {/* This will always be displayed */}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/faq" element={<FAQ />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer /> {/* This will always be displayed */}
    </Router>
  );
}

export default App;
