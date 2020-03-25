import React,{Component} from 'react';
import {getAllStudents, deleteStudent} from './ApiCalls.jsx';
import ViewStudents from './ViewStudents.jsx';
import CreateStudentForm from './CreateStudentForm.jsx';
import './student.css';
import  Header from './Header.jsx';



class Student extends Component {
	constructor(props){
	super(props);
	this.state = {
	     isViewPage: false,
	     isCreatePage: true,
	     isEditPage: false,
	     students: [],
	     editStudent: null, 
	     }; 
	        }
       
        fetchStudents = async () => {
        	 const students = await getAllStudents();
        	 console.log(students);
        	 this.setState({students: students});
        }

       async componentDidMount(){
       	await this.fetchStudents();
       }
 
       onEditStudent = (student) => {
       	 this.setState({
            isViewPage: false,
            isCreatePage: false,
            isEditPage: true,
            editStudent: student
        });
    }
    onDeleteStudent = async (studentId) => {
        const deleteStudentData = {
            studentId: studentId,
        }
        console.log('delete', deleteStudentData);
        await deleteStudent(deleteStudentData);
        await this.fetchStudents();
    }
       
     onViewAllStudents =async () =>{
        this.setState({
        	isViewPage: true,
        	isCreatePage: false,
        	isEditPage: false
        });
        await this.fetchStudents();
       }
       
       onCreateStudent = () =>{
          this.setState({
            isViewPage: false,
            isCreatePage: true,
            isEditPage: false
          });

       }
       


      render() {
        const students = this.state.students ? this.state.students : [];
        if(this.state.isViewPage){
        	return(
        		<div>
                  <Header onViewAllStudents = {this.onViewAllStudents} onCreateStudent = {this.onCreateStudent} />
                  <ViewStudents students = {students} onEditStudent = {this.onEditStudent} onDeleteStudent = {this.onDeleteStudent} />
        		</div>
                )
        } else if(this.state.isCreatePage){
             return(
                <div>
                  <Header onViewAllStudents = {this.onViewAllStudents} onCreateStudent = {this.onCreateStudent} />
                  <CreateStudentForm onCreateStudent ={this.onViewAllStudents} />
                </div>

             )
        } else if(this.state.isEditPage){
        const students = this.state.editStudents;
        	return(
   				<div>
                  <Header onViewAllStudents = {this.onViewAllStudents} onCreateStudent = {this.onCreateStudent} />
   			      <CreateStudentForm isEditPage = {true} student= {this.state.editStudent} onCreateStudent= {this.onViewAllStudents} />
            	</div>
        	)
        }
    }
}
 export default Student;