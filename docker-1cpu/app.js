const express = require('express');
// const bcrypt = require('bcrypt');

const app = express();

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const heyIamNonBlocking = (ms) => new Promise(res => {
  setTimeout(() => {
    res(ms)
  }, ms);
});

// app.get('/cpu', (req, res) => {
//   let hash;
//   for (let i = 0; i < 30; i++) {
//     const salt = bcrypt.genSaltSync(10);
//     hash = bcrypt.hashSync(String(+new Date()), salt);
//   }

//   res.send(hash);
// });

app.get('/noneblocking', async (req, res) => {
  const random = randomIntFromInterval(100, 1200);
  const data = await heyIamNonBlocking(random);
  res.send(String(data));
});

app.get('/ping', (req, res) => {
  console.log('pong');
  res.send('pong');
});


module.exports = app;