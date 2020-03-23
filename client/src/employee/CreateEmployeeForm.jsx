import React, {Component} from 'react';

class CreateEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            employeeId: '',
            employeeAddress: '',
            employeeContact: null,
        };
    }

    onChange=(e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <div className='create-employee-form'>
                <form>
                    <fieldset>Create Employee</fieldset>
                    <label>Employee Name</label>
                    <input type='text' name='' onChange={this.onChange} />
                </form>
            </div>
        );
    }
}