var express = require('express');
var router = express.Router();

var {fetchStudents,createStudent,updateStudent,deleteStudent} = require('./student-helper');
router.get('/', async function(request,response){
try{
var students = await fetchStudents();
return response.status(200).send({students:students});
}catch(error){
	console.log(error);
	return response.status(500).send({error:'something went wrong'});
  }
});

router.post('/',async function(request,response){
	try{
         var studentId = await createStudent(request.body);
         return response.status(200).send({studentId:studentId});
     }catch(error) {
          console.log(error);
          return response.status(500).send({error:'something went wrong'});
    }
});

router.put('/',async function(request,response){
     try{
          var studentUpdate = await updateStudent(request.body.studentId, request.body.updateInformation);
          return response.status(200).send(studentUpdate);
     }catch(error) {
           console.log(error);
           return response.status(500).send({error: 'Something went wrong'});
      }

});

router.delete('/', async function(request,response){
    try{
         var studentDelete = await deleteStudent(request.body.studentId);
         return response.status(200).send(studentDelete);
       }catch(error){
                  console.log(error);
                 return response.status(500).send({error: 'Something went wrong'});
                 } 
});

module.exports = router;