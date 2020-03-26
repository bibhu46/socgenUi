import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DataService from './DataService';

class AddEmployee extends Component{
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            gender: '',
            dob: '',
            department: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }
    validate(values) {
        let errors = {}
        if (!values.firstName) {
            errors.firstName = 'Enter firstname'
        } 
         if (!values.lastName) {
            errors.lastName = 'Enter lastname'
        }
        if (!values.department) {
            errors.department = 'Enter Department'
        }

        return errors

    }

    onSubmit(values) {

        let employee = {
            id: this.state.id,
            firstName: values.firstName,
            lastName: values.lastName,
            dob: values.dob,
            department: values.department,
            gender: values.gender
        }

            DataService.createEmployee(employee)
                .then(() => this.props.history.push('/'))
        
        // else {
        //     CourseDataService.updateCourse(username, this.state.id, course)
        //         .then(() => this.props.history.push('/courses'))
        // }

        console.log(values);
       
    }
    

    render(){
       
        let {id,firstName,lastName,gender,dob,department} = this.state
        return(
            <div>
                <h3>Add an Employee</h3>
                <div className = "App">
                <Formik
                        initialValues={{id,firstName,lastName,gender,dob,department}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="firstName" component="div"
                                        className="alert alert-warning" />
                                        <ErrorMessage name="lastName" component="div"
                                        className="alert alert-warning" />
                                        <ErrorMessage name="department" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>First Name</label>
                                        <Field className="form-control" type="text" name="firstName" />
                                        <label>Last Name</label>
                                        <Field className="form-control" type="text" name="lastName" />
                                        <label>Sex</label>
                                        <Field className="form-control" type="text" name="gender" />
                                        <label>Date of Birth</label>
                                        <Field className="form-control" type="text" name="dob" />
                                        <label>Department</label>
                                        <Field className="form-control" type="text" name="department" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit" >Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }

}
export default AddEmployee