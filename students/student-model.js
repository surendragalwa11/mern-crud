var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
student_id : {type : Number, required : true},
student_name :{type : String,required : true},
student_contact : Number;
student_address : {type : String, required : true,}
});

var Student = mongoose.model('student', studentSchema);

module.exports = Student;