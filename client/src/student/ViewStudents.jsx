import React , {Component} from 'react';


class ViewStudents extends Component {
	constructor(props){
		super(props);
		this.state = {
			selectedStudent:{},
		};
	}

	onDeleteClick = (stu) => {
      this.setState({selectedStudent: stu});

}

render(){
	const selectedStu = this.state.selectedStudent;
	return(
		<div>
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
                    { this.props.students.map(student => (
                     	<tr key = {student.student_id}>
                     	 <td>{student.student_name}</td>
                                    <td>{student.student_id}</td>
                                    <td>{student.student_address}</td>
                                    <td>{student.student_contact}</td>
                                    <td>
                                        <button type="button" className="btn btn-warning" onClick={() => this.props.onEditStudent(student)}>
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => this.onDeleteClick(student)} >
                                            Delete
                                        </button>
                                        </td>
                                        </tr>
                                    ))
                    }
                    </tbody>
                            </table>
                            {
                                 this.props.students.length < 1
                                 && <div className="no-data-text">
                                 No student exists.
                                 </div>	
                               }
                             <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">
                                Delete Student, {selectedStu.student_name} ?
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Are you sure, you want to delete this student record? Once you delete, all the information will be erased from database.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => this.props.onDeleteStudent(selectedStu.student_id)}>Delete</button>
                        </div>
                        </div>
                    </div>
                </div>
		</div>
        </div>
		);
    }
}

export default ViewStudents;