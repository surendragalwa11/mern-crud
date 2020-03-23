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

    onCreateEmployee=async() => {
          console.log(this.state);
          var employeeData = {
            "employee_name" : this.state.employeeName,
            "employee_id" : this.state.employeeId,
            "employee_address" : this.state.employeeAddress,
            "employee_contact" : parseInt(this.state.employeeContact)
                            };
     await createEmployee(employeeData);
    }

    render() {
        return(
            <div className='create-employee-form'>
              

               <div className="container">
               <form action="#">
                <label for="Empid">Employee Id</label>
                <input type="text" onChange={this.onChange} id="emp" name="employeeId" placeholder="Employee Id" />

                <label for="fname">Employee Name</label>
                <input type="text" onChange={this.onChange} id="fname" name="employeeName" placeholder="First Name" />

               <label for="email">Address</label>
                <input type="text" onChange={this.onChange} id="email" name="employeeAddress" placeholder="Email" />

                <label for="contact">Contact Number</label>
                <input type="tel" onChange={this.onChange} id="contact" name="employeeContact" placeholder="Contact" />

                <button type="button" onClick={this.onCreateEmployee} id="button" name="create">Create</button>
                <button type="button" id="button" name="cancel">Cancel</button>

                </form>  
                        </div>
                        </div>
        );
    }
}
export default CreateEmployee;