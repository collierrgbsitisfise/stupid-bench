const express = require('express');

const app = express();

app.get('/', (req, res) => {
  let str = '';
  let arr = [];
  for (let i = 0; i <= 10000000; i++) {
    arr.push(`str${i}`);
  }

  str = arr.join(',');

  res.send(str);
});

app.listen(3000, () => {
  setInterval(() => {
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`${~~(Math.random() * 1000)}The script uses approximately ${~~used} MB`);
  }, 100);
});
