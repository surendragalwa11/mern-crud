import React, {Component} from 'react';
import {getAllEmployees} from './ApiCalls.js';
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
        };
    }

    async componentDidMount() {
        const employees = await getAllEmployees();
        console.log(employees);
        this.setState({employees: employees});
    }

    onEditEmployee = () => {

    }

    onDeleteEmployee = () => {
        
    }
    
    onViewAllEmployees =() =>{
        this.setState({
            isViewPage: true,
            isCreatePage: false,
            isEditPage: false
        })
    }

    onCreateEmployee =() =>{
        this.setState({
            isViewPage: false,
            isCreatePage: true,
            isEditPage: false
        })
    }
    render() {
        const employees = this.state.employees ? this.state.employees : [];
        if(this.state.isViewPage) {
            return(
                <div>
                   <Header onViewAllEmployees ={this.onViewAllEmployees} onCreateEmployee ={this.onCreateEmployee} />
                   <ViewEmployees employees={employees} />
                </div>
                )
        } else if(this.state.isCreatePage) {
            return (
            <div>
                    <Header onViewAllEmployees ={this.onViewAllEmployees} onCreateEmployee ={this.onCreateEmployee} />
                    <CreateEmployee/>
            </div>
            )
        } else if(this.state.isEditPage) {
             return (
            <div>
                    <Header onViewAllEmployees ={this.onViewAllEmployees} onCreateEmployee ={this.onCreateEmployee} />
                    <CreateEmployee/>
            </div>
            )
        }
    }
}

export default Employee;