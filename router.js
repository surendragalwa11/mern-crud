var express = require('express');
var cors = require('cors')
var employeeRouter = require('./employees/employee-router');
var studentRouter = require('./students/student-router');


var intiliaseRouter = function intiliaseRouter(app) {
    app.use(express.json());
    app.use(cors());
    app.use('/employee', employeeRouter);
    app.use('/students', studentRouter);
}

module.exports = intiliaseRouter;