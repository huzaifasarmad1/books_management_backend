var express = require('express');
var router = express.Router();
var bookController = require('../controllers/books.controllers')
router.get('/', function (req, res) {
    console.log('inside routes')
  })
  router.post('/addbook', bookController.addbook)
  router.get('/getbooks', bookController.getbooks)
  router.put('/borrowbook', bookController.borrowbook)
  module.exports = router;