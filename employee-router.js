const express = require('express');
const router = express.Router();

const {fetchEmployees,createEmployee,updateEmployee,deleteEmployee} = require('./employee-helper');

// get all employees
router.get('/', async function(request, response) {
    try {
        const employees = await fetchEmployees();
        return response.status(200).send({employees: employees});
    } catch(error) {
        console.log(error);
        return response.status(500).send({error: 'Something went wrong'});
    }
    
});

// create employee
router.post('/', async function(request, response) {
    try {
        const employeeId = await createEmployee(request.body);
        return response.status(200).send({employeeId: employeeId});
    } catch(error) {
        console.log(error);
        return response.status(500).send({error: 'Something went wrong'});
    }
});

// update employee
router.put('/', async function(request, response) {
    try {
        const updateStatus = await updateEmployee(request.body.employeeId, request.body.updateInformation);
        return response.status(200).send(updateStatus);
    } catch(error) {
        console.log(error);
        return response.status(500).send({error: 'Something went wrong'});
    }
});

// delete employee
router.delete('/', async function(request, response) {
    try {
        const deleteStatus = await deleteEmployee(request.body.employeeId);
        return response.status(200).send(deleteStatus);
    } catch(error) {
        console.log(error);
        return response.status(500).send({error: 'Something went wrong'});
    }
});


module.exports = router;