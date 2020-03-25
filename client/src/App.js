import React from 'react';
import './App.css';
import Employee from './employee/Employee.jsx';
import Student from './student/Student.jsx';

function App() {
  return (
    <div className="App">
       {/* <Employee /> */}
       { <Student /> }
        <div className='footer'>CRUD Application @Copyright</div>
    </div>
  );
}

export default App;
