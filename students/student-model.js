var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
student_id : {type: String, required: true, max: 5, unique: true},
student_name :{type : String,required : true},
student_contact : Number,
student_address : {type : String, required : true,}
});

var Student = mongoose.model('student', studentSchema);

module.exports = Student;