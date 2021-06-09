const express = require('express');
const cors = require('cors');
const dummydata = require('./dummydata');
const app = express();

const IP = 'localhost';
const PORT = 5555;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send(dummydata[0].data.movies);
});

app.get('/:id', (req, res) => {
  const movie = dummydata[0].data.movies.filter(el => {
    if (el.id === Number(req.params.id)) return true;
  });
  res.send(movie);
});

app.listen(PORT, IP, () => console.log(`connected server`));
