const express = require('express');
var cors = require('cors')
const employeeRouter = require('./employee-router');


const intiliaseRouter = function intiliaseRouter(app) {
    app.use(express.json());
    app.use(cors());
    app.use('/employee', employeeRouter);
}

module.exports = intiliaseRouter;