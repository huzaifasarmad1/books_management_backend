var express = require('express');
var router = express.Router();
var studentController = require('../controllers/students.controllers')
router.get('/', function (req, res) {
    console.log('inside routes')
  })
  router.post('/addstudent', studentController.addstudent)
  router.get('/getstudents', studentController.getstudents)
  module.exports = router;