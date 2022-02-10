const express = require('express')
const app = express()
var ids = require('short-id');
var db=require('../db/db')
const studentController = {};
studentController.addstudent = async (req, res) => {
  console.log('inside add student')
  // var student_id = ids.generate()
  const [id]=await db('students').insert({
    first_name:req.body.first_name,
    last_name:req.body.last_name
  }).returning('id')
  console.log(id)
 res.send('successfully added new student')
}
studentController.getstudents = async (req, res) => {
  console.log('inside add student')
  // var student_id = ids.generate()
  var response=await db('students').select()
  console.log(response)
res.send(response)
//  res.send('successfully added new student')
}
module.exports = studentController