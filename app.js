const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Parse json request body middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/', (req, res) => {
  // Access request body json: req.body
  res.send("Hello! - Post request received. JS code running.");
});

app.listen(port, () => {
  return console.log(`server is listening on http://localhost:${port}`);
});