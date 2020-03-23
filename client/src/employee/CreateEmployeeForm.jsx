import React, {Component} from 'react';
import {createEmployee} from './ApiCalls.js';

class CreateEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            employeeId: '',
            employeeAddress: '',
            employeeContact: '',
        };
    }

    onChange=(e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    onCreateEmployee = async() => {
        console.log(this.state);
        var employeeData = {
            "employee_name" : this.state.employeeName,
            "employee_id" : this.state.employeeId,
            "employee_address" : this.state.employeeAddress,
            "employee_contact" : parseInt(this.state.employeeContact)
        };
        await createEmployee(employeeData);
        this.props.onCreateEmployee();

    }

    render() {
        return(
            <div className='create-employee-form'>
                <div className="create-container">
                    <form action="#">
                        <label for="Empid">Employee Id</label>
                        <input type="text" onChange={this.onChange} id="emp" name="employeeId" placeholder="Employee ID" />

                        <label for="fname">Employee Name</label>
                        <input type="text" onChange={this.onChange} id="fname" name="employeeName" placeholder="Employee Name" />

                        <label for="email">Address</label>
                        <input type="text" onChange={this.onChange} id="email" name="employeeAddress" placeholder="Employee Address" />

                        <label for="contact">Contact Number</label>
                        <input type="tel" onChange={this.onChange} id="contact" name="employeeContact" placeholder="Employee Contact" />

                        <button type="button" onClick={this.onCreateEmployee} id="button" name="create">Create</button>

                    </form>  
                </div>
            </div>
        );
    }
}
export default CreateEmployee;