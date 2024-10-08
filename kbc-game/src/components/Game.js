// src/components/Game.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { QRCodeSVG } from 'qrcode.react'; // Import QRCodeSVG
import './Game.css';

function Game() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    const name = localStorage.getItem('playerName') || prompt("Enter your name:");
    setPlayerName(name);
    localStorage.setItem('playerName', name);
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/questions');
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleAnswer = (answer) => {
    const correctAnswer = questions[currentQuestionIndex]?.answer;
    if (answer === correctAnswer) {
      setIsCorrect(true);
      setPlayerScore((prevScore) => prevScore + 1);
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setIsCorrect(null);
        } else {
          alert(`Game Over! Your score: ${playerScore + 1}`);
        }
      }, 2000);
    } else {
      setIsCorrect(false);
      setTimeout(() => setIsCorrect(null), 2000);
    }
  };

  const appURL = 'http://localhost:3000'; // Update with your actual app URL

  if (questions.length === 0) return <div>Loading questions...</div>;

  return (
    <div className="game">
      <h1>KBC Game</h1>
      <h2>{playerName}, Current Question:</h2>
      <h3>{questions[currentQuestionIndex].question}</h3>
      <div className="options">
        {Object.entries(questions[currentQuestionIndex].options).map(([key, value]) => (
          <button key={key} onClick={() => handleAnswer(key)}>{key}: {value}</button>
        ))}
      </div>
      {isCorrect !== null && (
        <h3 className={isCorrect ? 'correct' : 'incorrect'}>
          {isCorrect ? 'Congratulations!' : 'Wrong Answer!'}
        </h3>
      )}
      {/* QR Code Section */}
      <div className="qr-code">
        <h3>Scan to Join Game:</h3>
        <QRCodeSVG value={appURL} size={128} /> {/* Use QRCodeSVG component */}
      </div>
    </div>
  );
}

export default Game;
