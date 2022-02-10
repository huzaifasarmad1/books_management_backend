const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const studentsRoutes = require('./routes/students.routes');
const booksRoutes = require('./routes/books.routes');
app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  console.log('SERVER IS RUNNING')
  app.use(bodyParser.json());// to support JSON-encoded bodies
  const port = 4000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});
  app.use(cors());

// Routes which should handle requests
app.use('/students', studentsRoutes);
app.use('/books', booksRoutes);
app.listen(process.env.PORT || 4000)

module.exports = app;