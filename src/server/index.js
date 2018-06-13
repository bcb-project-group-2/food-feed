const express = require('express');
// const mdRoutes = require('./controllers/mdController');
const path = require('path');
const parser = require('body-parser');
// const db = require('./models');
const app = express();


app.use(parser.urlencoded({extended: true}));
app.use(parser.json());
app.use(parser.text());

app.use(express.static(path.join(__dirname, '../../dist')));

app.listen(process.env.PORT || 8080,
  () => console.log('Listening on port 8080!'));
