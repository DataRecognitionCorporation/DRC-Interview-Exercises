import express from 'express';
import { json, urlencoded } from 'body-parser';
const sourceQuestions = require('./mock_data/questions');

const app = express();
const port = 3000;

// Parse json request body middleware
app.use(urlencoded({ extended: false }));
app.use(json());

app.post('/', (req, res) => {
  // Access request body json: req.body
  res.send("Hello! - Post request received. Typescript version running.");
});

app.get('/questions', (req, res) => {
  // Access QS params via: req.query
  // Mock question JSON accessed via variable: sourceQuestions
  res.send({
    message: "Hello! - GET request received. Typescript version running."
  });
});

app.listen(port, () => {
  return console.log(`server is listening on http://localhost:${port}`);
});

// RESTART APP ON CODE CHANGES AFTER SAVING FILE(s) !!