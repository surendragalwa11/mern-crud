import React, {Component} from 'react';

class ViewEmployees extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        console.log(this.props);
        return(
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Employee ID</th>
                    <th scope="col">Address</th>
                    <th scope="col">Contact</th>
                    </tr>
                </thead>
            <tbody>
                {
                    this.props.employees.map(employee => (
                        <tr scope='row'>
                            <td>{employee._id}</td>
                            <td>{employee.employee_name}</td>
                            <td>{employee.employee_id}</td>
                            <td>{employee.employee_address}</td>
                            <td>{employee.employee_contact}</td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        );
    }
}

export default ViewEmployees;
