export async function getAllEmployees() {
    try {
        let res = await fetch("http://localhost:3010/employee");
        res = await res.json();
        console.log('res', res);
        const employees = res.employees;
        return employees;
    } catch(error) {
        console.log('Get all employees error', error);
        return [];
    }
    
      
}

export async function createEmployee(createEmployeeData) {
    try { 
        let res = await fetch("http://localhost:3010/employee", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
            },
            mode: "cors",
            body: JSON.stringify(createEmployeeData)
        });
        res = await res.json();
        const employeeId = res.employeeId;
        return employeeId;
    } catch(error) {
        console.log('create employee error', error);
        return null;
    }
        
}

export async function updateEmployee(updateEmployeeData) {
    try {
        let res = await fetch("http://localhost:3010/employee", {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: "cors",
            body: JSON.stringify(updateEmployeeData),
        });
        res = await res.json();
        const modified = res.nModified;
        return modified;
    } catch(error) {
        console.log('update employee error', error);
        return null;
    }
}

export async function deleteEmployee(deleteEmployeeData) {
    try {
        let res = await fetch("http://localhost:3010/employee", {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify(deleteEmployeeData),
        });
        res = await res.json();
        const modified = res.nModified;
        return modified;
    } catch(error) {
        console.log('delete employee error', error);
        return null;
    }
}
