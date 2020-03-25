export async function getAllStudents() {
	try{
         let res = await fetch("http://localhost:3010/students");
         res = await res.json();
         console.log('res',res);
         const students = res.students; 
         return students;
      }catch(error){
          console.log('get all students', error);
          return[];
      }

}

export async function createStudent(createStudentData) {
	try{
         let res = await fetch("http://localhost:3010/students", {
           method : 'POST',
         headers :{
         'Accept' : 'application/json',
         'content-type' : 'application/json',
         },
         mode : "cors",
         body : JSON.stringify(createStudentData)
         });
         res = await res.json();
         const studentId = res.studentId;
         return studentId;
        }catch(error){
          console.log('create employee error', error);
          return null;
        
}
}

export async function updateStudent(updateStudentData){
  try{
       let res = await fetch("http://localhost:3010/students",{method: 'PUT',
      headers :{
         'Accept' : 'application/json',
         'content-type' : 'application/json',
         },
         mode : "cors",
         body : JSON.stringify(updateStudentData)
         });
         res = await res.json();
         const modified = res.nModified;
         return modified;
         }catch(error){
          console.log('upadte an student',error);
          return null;
         }
  }

  export async function deleteStudent(deleteStudentData){
    try{
         let res = await fetch("http://localhost:3010/students",{
         method :'DELETE' ,
         headers :{
         'Accept' : 'application/json',
         'content-type' : 'application/json',
         },
         mode : "cors",
         body : JSON.stringify(deleteStudentData)
       });
         res = await res.json();
         const modified = res.nModified;
         return modified;
       }catch(error){
        console.log('delete a student', error);
        return null;
       }
  }
