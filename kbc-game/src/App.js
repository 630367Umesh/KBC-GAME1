// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import Mobile from './components/Mobile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/mobile" element={<Mobile />} />
      </Routes>
    </Router>
  );
}

export default App;
