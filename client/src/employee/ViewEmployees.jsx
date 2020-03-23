import React, {Component} from 'react';

class ViewEmployees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedEmployee: {},
        };
    }

    onDeleteClick = (emp) => {
        this.setState({selectedEmployee: emp});
    }

    render() {
        const selectedEmp = this.state.selectedEmployee;
        return(
            <div className='view-employees'>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Address</th>
                        <th scope="col">Contact</th>
                        <th scope='col'>Edit</th>
                        <th scope='col'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.employees.map(employee => (
                                <tr key={employee._id}>
                                    <td>{employee.employee_name}</td>
                                    <td>{employee.employee_id}</td>
                                    <td>{employee.employee_address}</td>
                                    <td>{employee.employee_contact}</td>
                                    <td>
                                        <button type="button" className="btn btn-warning" onClick={() => this.props.onEditEmployee(employee)}>
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => this.onDeleteClick(employee)} >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                            
                        }
                    </tbody>
                    {/* Empty table text */}
                    {
                        this.props.employees.length < 1
                        &&
                        <div className='no-data-text'>
                            No employee exist. Please create an employee first.
                        </div>
                    }
                </table>
                
                {/* Delete Modal */}
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">
                                Delete Employee, {selectedEmp.employee_name} ?
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Are you sure, you want to delete this employee? Once you delete, all the information will be erased from database.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => this.props.onDeleteEmployee(selectedEmp._id)}>Delete</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployees;
