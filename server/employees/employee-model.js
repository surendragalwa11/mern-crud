var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    employee_name: { type: String, required: true, min: 3, max: 20},
    employee_id: { type: String, required: true, max: 5, unique: true },
    employee_address: String,
    employee_contact: {type: Number}
  });

var Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
