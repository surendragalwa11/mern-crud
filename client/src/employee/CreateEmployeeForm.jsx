import React, {Component} from 'react';
import {createEmployee, updateEmployee} from './ApiCalls.js';

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
        var employeeData = {
            "employee_name" : this.state.employeeName,
            "employee_id" : this.state.employeeId,
            "employee_address" : this.state.employeeAddress,
            "employee_contact" : parseInt(this.state.employeeContact)
        };
        if(this.props.isEditPage) {
            const updateEmployeeData = {
                employeeId: this.props.employee._id,
                updateInformation: employeeData,
            }
            await updateEmployee(updateEmployeeData)
        } else {
            await createEmployee(employeeData);
        }
        
        this.props.onCreateEmployee();

    }

    componentDidMount() {
        if(this.props.isEditPage 
      //  && (this.state.employeeName !== this.props.employee.employee_name)
        ) {
            this.setState({
                employeeName: this.props.employee.employee_name,
                employeeId: this.props.employee.employee_id,
                employeeAddress: this.props.employee.employee_address,
                employeeContact: this.props.employee.employee_contact,
            });
        }
    }

    render() {
        const isEditPage = this.props.isEditPage;
        let empName = this.state.employeeName;
        let empId = this.state.employeeId;
        let empAddress = this.state.employeeAddress;
        let empContact = this.state.employeeContact;
        return(
            <div className='create-employee-form'>
                <div className="create-container">
                    <form action="#">
                        <label htmlFor="Empid">Employee Id</label>
                        <input type="text" onChange={this.onChange} id="emp" name="employeeId" placeholder="Employee ID" defaultValue={empId} />

                        <label htmlFor="fname">Employee Name</label>
                        <input type="text" onChange={this.onChange} id="fname" name="employeeName" placeholder="Employee Name" defaultValue={empName} />

                        <label htmlFor="email">Address</label>
                        <input type="text" onChange={this.onChange} id="email" name="employeeAddress" placeholder="Employee Address" defaultValue={empAddress} />

                        <label htmlFor="contact">Contact Number</label>
                        <input type="tel" onChange={this.onChange} id="contact" name="employeeContact" placeholder="Employee Contact" defaultValue={empContact} />

                        <button type="button" onClick={this.onCreateEmployee} id="button" name="create">
                            {isEditPage ? 'Update' : 'Create'}
                        </button>

                    </form>  
                </div>
            </div>
        );
    }
}
export default CreateEmployee;