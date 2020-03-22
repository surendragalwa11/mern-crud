var Student = require('./student-model.js');

var fetchStudents = async function(){
console.log('fetch all students');
var students = await Student.find({});
return students;
};

var createStudent = async function(student){
console.log('create students', student);
var stu = new Student(student);
var studentInfo =  await stu.save();
return studentInfo._id;
}

var updateStudent = async function(studentId, updateInformation){
	console.log('updated information of student', studentId, updateInformation);
	var updateData = await Student.updateOne({student_id: studentId}, updateInformation);
	return updateData;
}

var deleteStudent = async function(studentId){
	console.log('delete student', studentId);
	var deleteData = await Student.deleteOne({student_id:studentId});
	return deleteData;
};

module.exports = {
  fetchStudents,
  createStudent,
  updateStudent,
  deleteStudent
}