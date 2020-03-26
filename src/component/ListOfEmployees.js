import React, { Component } from 'react'
import DataService from './DataService';

class ListOfEmployee extends Component{

    constructor(props){
        super(props)
        this.refreshEmployees = this.refreshEmployees.bind(this)
        this.deleteEmpClicked = this.deleteEmpClicked.bind(this)
        this.addEmployeeClicked = this.addEmployeeClicked.bind(this)
       
        this.state ={
            employees: [],
            message: null
        }
    }

    componentDidMount = () =>{
        this.refreshEmployees();
    }

    refreshEmployees=()=>{
        DataService.retrieveAllemployee()
        .then(
            Response => {
                console.log(Response);
                this.setState({employees:Response.data})
            }
        )
    }
    deleteEmpClicked(id) {
        DataService.deletEmployee(id)
            .then(
                Response => {
                    this.setState({ message: `Delete of employee ${id} Successful` })
                    this.refreshEmployees()
                }
            )
    
    }
    addEmployeeClicked(){
        this.props.history.push(`/addEmp`)
    }

    
    render(){
        return(
            <div className="App">
            <h3 style={{backgroundColor: "#ffc107"}}>All Employees</h3>
            {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
            <div className="App">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>DOB</th>
                            <th>Department</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.gender}</td>
                                        <td>{employee.dob}</td>
                                        <td>{employee.department}</td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteEmpClicked(employee.id)}>Delete</button></td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className="row">
                 <button className="btn btn-success" onClick={this.addEmployeeClicked}>Add</button>
            </div>
        </div>
        )
    }
}
export default ListOfEmployee