import React, {Component} from 'react';
import {getAllEmployees} from './ApiCalls.js';
import ViewEmployees from './ViewEmployees.jsx'

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isViewPage: true,
            isCreatePage: false,
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

    render() {
        const employees = this.state.employees ? this.state.employees : [];
        if(this.state.isViewPage) {
            return <ViewEmployees employees={employees} />
        } else if(this.state.isCreatePage) {
            return <div>Create Page</div>
        } else if(this.state.isEditPage) {
            return <div>Edit Page</div>
        } else {
            return <div>CRUD Application</div>
        }
    }
}

export default Employee;