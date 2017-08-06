var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var objectId = require('mongodb').ObjectID;
var Database = require('./Employee');

// GET all employees
router.get('/',(req,res) =>{
  Database.db.collection('employees').find().toArray().then((result) => {
    res.render('index', {employees: result});
    // res.send(result);
  })
});

// GET one employee
router.get('/:id',(req,res) =>{
  let employeeId = new mongodb.ObjectID(req.params['id']);
  Database.db.collection('employees').findOne({_id:employeeId}).then((result) => {
    // res.send(result);
    res.render('employeeSingle', {employees: result});
  });
});

// EDIT one employee
router.get('/edit/:id',(req,res) =>{
  let employeeId = new mongodb.ObjectID(req.params['id']);
  Database.db.collection('employees').findOne({_id:employeeId}).then((result) => {
    // res.send(result);
    res.render('edit', {employees: result});
  });
});

// POST a new employee
router.post('/',(req,res) =>{
  let employee = req.body;
  employee._id = new mongodb.ObjectID();
  Database.db.collection('employees').save(employee).then((result) => {
    res.redirect('/employees');
  });
  // res.render('index');
});

// UPDATE existing employee
router.put('/edit',(req,res) =>{
  let employee = req.body;
  employee._id = new mongodb.ObjectID(req.params['id']);
  Database.db.collection('employees').save(employee).then((result) => {
    // res.redirect('/employees');
    res.send(result);
  });
});

// DELETE an existing employee
router.delete('/:id',(req,res) =>{
  let employeeId = new mongodb.ObjectID(req.params['id']);
  Database.db.collection('employees').remove({_id:employeeId}).then((result) => {
    res.send(result);
  })
});

module.exports = router;
