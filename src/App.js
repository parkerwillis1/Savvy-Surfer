import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Tutorials from './pages/Tutorials';
import Community from './pages/Community';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Tutorials" element={<Tutorials />} />
          <Route path="/Community" element={<Community />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
