// src/components/Home.js
import React from 'react';
import { QRCodeSVG } from 'qrcode.react'; // Use QRCodeSVG
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>KBC Game</h1>
      <QRCodeSVG value="http://localhost:3000/mobile" />
      <a href="/game" className="start-button">Start Game</a>
    </div>
  );
}

export default Home;
