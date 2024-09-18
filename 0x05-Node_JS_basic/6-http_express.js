const express = require('express');

const app = express()
const port = 1245;
const host = '127.0.0.1';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, host, () => {
  console.log(`app is listning in http://${host}:${port}`);
});

module.exports = app;
