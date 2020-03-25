import React, {Component} from 'react';

class Header extends component{
	render(){
		return(
               <div className="header">
               <a href="#" onClick={this.props.onViewAllStudents}>View All Students</a>
               <a href="#" onClick={this.props.onCreateStudent}>Create Student</a>
               </div>
		)
	}
}
export default Header;