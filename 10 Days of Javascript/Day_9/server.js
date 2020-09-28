const express = require('express');
const path = require('path');
const app = express();

app.set('views', [path.join(__dirname, 'public')]);
app.use(express.static('./public'));

app.get('/', (req, res) => {
  return res.render('index.html');
});

let server = app.listen(3030, 'localhost', () => {
  console.log('App running');
  console.log('http://localhost:3030');
});