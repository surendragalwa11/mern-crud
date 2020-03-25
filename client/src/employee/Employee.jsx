import React, {Component} from 'react';
import {getAllEmployees, deleteEmployee} from './ApiCalls.js';
import ViewEmployees from './ViewEmployees.jsx';
import CreateEmployee from './CreateEmployeeForm.jsx';
import "./employee.css";
import  Header from './Header.jsx';

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isViewPage: false,
            isCreatePage: true,
            isEditPage: false,
            employees: [],
            editEmployee: null,
        };
    }

    fetchEmployees = async () => {
        const employees = await getAllEmployees();
        console.log(employees);
        this.setState({employees: employees});

    }

    async componentDidMount() {
        await this.fetchEmployees();
    }
   //will be called when we click on the edit button in view page table row
    onEditEmployee = (employee) => {
        this.setState({
            isViewPage: false,
            isCreatePage: false,
            isEditPage: true,
            editEmployee: employee
        });
    }
//will be called when we click on the delete button in the modal when we click on delete button in view page table row
    onDeleteEmployee = async (employeeId) => {
        const deleteEmployeeData = {
            employeeId: employeeId,
        }
        console.log('delete', deleteEmployeeData);
        await deleteEmployee(deleteEmployeeData);
        await this.fetchEmployees();
    }
    
    //will be called when we click on view all employees link in header
    onViewAllEmployees =async () =>{
        this.setState({
            isViewPage: true,
            isCreatePage: false,
            isEditPage: false
        });
        await this.fetchEmployees();
    }

//will be called when we click on create employee link in header
    onCreateEmployee =  () =>{
        this.setState({
            isViewPage: false,
            isCreatePage: true,
            isEditPage: false
        });
    }



    render() {
        const employees = this.state.employees ? this.state.employees : [];
        if(this.state.isViewPage) {
            return(
                <div>
                   <Header onViewAllEmployees ={this.onViewAllEmployees} onCreateEmployee ={this.onCreateEmployee} />
                   <ViewEmployees employees={employees} onEditEmployee={this.onEditEmployee} onDeleteEmployee={this.onDeleteEmployee} />
                </div>
                )
        } else if(this.state.isCreatePage) {
            return (
                <div>
                    <Header onViewAllEmployees ={this.onViewAllEmployees} onCreateEmployee ={this.onCreateEmployee} />
                    <CreateEmployee onCreateEmployee={this.onViewAllEmployees} />
                </div>
            )
        } else if(this.state.isEditPage) {
            const employee = this.state.editEmployee;
             return (
            <div>
                <Header onViewAllEmployees ={this.onViewAllEmployees} onCreateEmployee ={this.onCreateEmployee} />
                <CreateEmployee isEditPage={true} employee={employee} onCreateEmployee={this.onViewAllEmployees} />
            </div>
            )
        }
    }
}

export default Employee;