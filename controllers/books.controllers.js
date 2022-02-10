const express = require('express')
const app = express()
var ids = require('short-id');
var db=require('../db/db')
var dateformat = require('../dateformat')
var formatDate = dateformat.formatDate
const bookController = {};
bookController.addbook = async (req, res) => {
  if(!req.body.borrowed_by){
        req.body.borrowed_by='empty'
}
if(!req.body.borrow_date){
    req.body.borrow_date='empty'
}
if(!req.body.return_date){
    req.body.return_date='empty'    
}
  var response=await db('books').insert({
      book_id:ids.generate(),
    book_name:req.body.book_name,
    author:req.body.author,
   borrowed_by:req.body.borrowed_by,
    borrow_date:req.body.borrow_date,
    return_date:req.body.return_date,
  })
  console.log(response)
 res.send('successfully added new book')
}
bookController.getbooks = async (req, res) => {
  var response=await db('books').select()
  console.log(response)
res.send(response)
}
bookController.borrowbook = async (req, res) => {
    var date=new Date()
  var borrow_date = dateformat(date);
    try{
        console.log('in try')
        var response=await db('books').where('book_id', '=', req.body.book_id)
        .update({ borrowed_by: req.body.borrowed_by,borrow_date:borrow_date,return_date:req.body.return_date })
        res.send('Updated Successfully')
    }
    catch{
        console.log('in catch')
    }
  
  //  res.send('successfully added new book')
  }
module.exports = bookController