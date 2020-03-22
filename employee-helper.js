const Employee = require('./employee-model');


const fetchEmployees = async function() {
    console.log('fetch all employees');
    const employees = await Employee.find({});
    return employees;
};

const createEmployee = async function(employee) {
    console.log('create employee', employee);
    const emp = new Employee(employee);
    const employeeInfo = await emp.save();
    return employeeInfo._id;
}

const updateEmployee = async function(employeeId, updateInformation) {
    console.log('update employee', employeeId, updateInformation);
    const updateStatus = await Employee.updateOne({employee_id: employeeId}, updateInformation);
    return updateStatus;
}

const deleteEmployee = async function(employeeId) {
    console.log('delete employee', employeeId);
    const deleteStatus = await Employee.deleteOne({employee_id: employeeId});
    return deleteStatus;
}

module.exports = {
    fetchEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee
}