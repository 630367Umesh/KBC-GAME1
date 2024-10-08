// src/components/Mobile.js
import React, { useState } from 'react';
import './Mobile.css';

function Mobile() {
  const [name, setName] = useState('');

  const handleJoin = () => {
    localStorage.setItem('playerName', name);
    window.location.href = '/game';
  };

  return (
    <div className="mobile">
      <h1>Join the Game</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleJoin}>Join</button>
    </div>
  );
}

export default Mobile;
