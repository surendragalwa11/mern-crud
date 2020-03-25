import React,{Component} from 'react';
import {createStudent,updateStudent} from './ApiCalls.jsx';


class CreateStudentForm extends Component{
	constructor(props) {
		super(props);
      this.state = {
      	studentId : '',
      	studentName  : '',
      	studentEmail : '' ,
      	studentContact : '',
      	studentAddress : '' 
      }
	};
	onChange =(stu) => {
		const name = stu.target.name;
		const value = stu.target.value;
		this.setState({
			[name] : value
		});
    }

    onCreateStudent = async() => {
         var studentData = {
         	"student_name" : this.state.studentName,
         	"student_id" : this.state.studentId,
         	"student_email" : this.state.studentEmail,
         	"student_contact" : parseInt(this.state.studentContact),
         	"student_address" : this.state.studentAddress
         };
         if(this.props.isEditPage){
         	const updateStudentData = {
         		studentId : this.props.student._id,
         		updateInformation : studentData,
         	}
         	await updateStudent(updateStudentData);
         } else {
         	await createStudent(studentData);
         }
       this.props.onCreateStudent();
    }

    componentDidMount(){
        if(this.props.isEditPage){
        	this.setState({
        		studentId : this.props.student.student_id,
				studentName  : this.props.student.student_name,
				studentEmail : this.props.student.student_email ,
				studentContact : this.props.student.student_contact,
				studentAddress : this.props.student.student_address
        	});
        }
    }



render() {
 let stuId = this.state.studentId;
 let stuName = this.state.studentName;
 let stuEmail = this.state.studentEmail;
 let stuContact = this.state.studentContact;
 let stuAddress = this.state.studentAddress;
 let isEditPage = this.props.isEditPage;
 return(
        <div className='create-student-form'>
                <div className="create-container">
                    <form action="#">
                        <label htmlFor="Stuid">Student Id</label>
                        <input type="text" onChange={this.onChange} id="stuId" name="studentId" placeholder="Student ID" defaultValue={stuId} />
                        
                        <label htmlFor="Stuemail">Student email</label>
                        <input type="email" onChange={this.onChange} id="email" name="studentEmail" placeholder="Student Email" defaultValue={stuEmail} />


                        <label htmlFor="fname">Student Name</label>
                        <input type="text" onChange={this.onChange} id="fname" name="studentName" placeholder="Student Name" defaultValue={stuName} />

                        <label htmlFor="address">Address</label>
                        <input type="text" onChange={this.onChange} id="address" name="studentAddress" placeholder="Student Address" defaultValue={stuAddress} />

                        <label htmlFor="contact">Contact Number</label>
                        <input type="tel" onChange={this.onChange} id="contact" name="studentContact" placeholder="Student Contact" defaultValue={stuContact} />

                        <button type="button" onClick={this.onCreateStudent} id="button" name="create">
                            {isEditPage ? 'Update' : 'Create'}
                        </button>

                    </form>  
                </div>
            </div>
 	);
  }
}
export default CreateStudentForm;