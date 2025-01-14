const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error'); // Always send a response
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        reject(new Error('Something went wrong'));
      } else {
        resolve();
      }
    }, 1000);
  });
}