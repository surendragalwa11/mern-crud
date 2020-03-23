var Employee = require('./employee-model');


var fetchEmployees = async function() {
    console.log('fetch all employees');
    var employees = await Employee.find({});
    return employees;
};

var createEmployee = async function(employee) {
    console.log('create employee', employee);
    var emp = new Employee(employee);
    var employeeInfo = await emp.save();
    return employeeInfo._id;
}

var updateEmployee = async function(employeeId, updateInformation) {
    console.log('update employee', employeeId, updateInformation);
    var updateStatus = await Employee.updateOne({_id: employeeId}, updateInformation);
    return updateStatus;
}

var deleteEmployee = async function(employeeId) {
    console.log('delete employee', employeeId);
    var deleteStatus = await Employee.deleteOne({_id: employeeId});
    return deleteStatus;
}

module.exports = {
    fetchEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee
}