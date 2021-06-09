const express = require('express');
const cors = require('cors');
const dummydata = require('./dummydata');
const app = express();

const IP = 'localhost';
const PORT = '5555';

app.use(express.json({ strict: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.send(dummydata[0].data.movies);
});

app.listen(PORT, IP, () => console.log(`http://${IP}:${PORT} 효승님 ㅎㅇㅎㅇ`));
