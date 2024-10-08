// index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample Questions Data
const questions = [
  {
    question: "What is the capital of France?",
    options: {
      A: "Berlin",
      B: "Madrid",
      C: "Paris",
      D: "Lisbon"
    },
    answer: "C"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: {
      A: "Earth",
      B: "Mars",
      C: "Jupiter",
      D: "Saturn"
    },
    answer: "B"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: {
      A: "Atlantic Ocean",
      B: "Indian Ocean",
      C: "Arctic Ocean",
      D: "Pacific Ocean"
    },
    answer: "D"
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: {
      A: "Charles Dickens",
      B: "Jane Austen",
      C: "William Shakespeare",
      D: "Mark Twain"
    },
    answer: "C"
  },
  {
    question: "What is the boiling point of water?",
    options: {
      A: "50°C",
      B: "100°C",
      C: "150°C",
      D: "200°C"
    },
    answer: "B"
  }
];

// Routes
app.get('/api/questions', (req, res) => {
  res.json(questions);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
